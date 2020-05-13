import { Component, OnInit, ChangeDetectorRef, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { HeadcountMenus } from '../shared/config/constants';
import { HeadcountService } from './headcount.service';
import { AppService } from '../app.service';
import { Subject } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { takeUntil, filter } from 'rxjs/operators';

const COLS_MAPPINGS = [
  { title: 'CToolId', field: 'position_id', sortable: true, fixed: true },
  { title: 'Approval Status', field: 'approval_status', sortable: true, fixed: true },
  { title: 'Pending With', field: 'pending_with', sortable: true, fixed: false },
  { title: 'Employee Id', field: 'ghrs_employee_id', sortable: true, sorter: 'number', fixed: false },
  { title: 'Full Name', field: 'employee_name', sortable: true, fixed: false },
  { title: 'Direct Cost - Rest of the Year($)', field: 'rate_amount', sortable: false, fixed: false },
  { title: 'Role Start Date', field: 'plan_start_date', sortable: true, fixed: false },
  { title: 'Role End Date', field: 'position_end_date', sortable: true, fixed: false },
  { title: 'Employee Class', field: 'employee_class', sortable: true, fixed: false },
  { title: 'Country', field: 'country_name', sortable: true, fixed: false },
  { title: 'Contract Type', field: 'contract_type', sortable: true, fixed: false }
];

@Component({
  selector: 'pion-headcount',
  templateUrl: './headcount.component.html',
  styleUrls: ['./headcount.component.scss']
})
export class HeadcountComponent implements OnInit, OnDestroy {

  selectedMenu$: Observable<string>;
  Menus = HeadcountMenus;
  COLS_MAPPINGS: Array<any> = [];
  headcountItems: Array<app.HeadcountItem> = [];
  showFilters = false;
  totalCount: number = 0;

  roleContextMenuItems = ['Edit role', 'Copy role', 'Recall role', 'Convert role', 'Migrate role', 'Internal Transfer', 'Demise role'];

  // default value for request
  reqData: app.ApiRequest = {
    pageNo: 0,
    pageOffset: 15,
    sortBy: 'roleGridId',
    employeeId: 4506333
  }

  private unsubscribeSubject = new Subject();
  private unsubscribe$ = this.unsubscribeSubject.asObservable();

  constructor(private headcountService: HeadcountService, private appService: AppService, private cd: ChangeDetectorRef,
    private router: Router) {
    this.selectedMenu$ = this.headcountService.selectedHeadcountMenu$;
  }

  ngOnInit() {
    // this.headcountService.setHeadcountMenu(this.Menus.HEADCOUNT.menu);
    this.getHeadCountData();
    this.checkUrl(this.router.url);

    this.router.events.pipe(
      takeUntil(this.unsubscribe$),
      filter(e => e instanceof NavigationEnd),
    ).subscribe((e: NavigationEnd) => {
      this.checkUrl(e.urlAfterRedirects || e.url);

    });
  }

  checkUrl(url: string) {
    for (const menu of Object.keys(this.Menus)) {
      if (url.includes(this.Menus[menu].route)) {
        this.headcountService.setHeadcountMenu(this.Menus[menu].menu);
        break;
      }
    }
  }
  getHeadCountData() {
    this.headcountService.getHeadcountData(this.reqData).subscribe(res => {
      this.headcountItems = [];
      this.cd.detectChanges();
      //make changes of new response in a new asynchronous loop
      setTimeout(() => {
        this.COLS_MAPPINGS = res.result.columns;
        this.headcountItems = res.result.data;
        this.totalCount = res.result.totalCount;
        this.cd.detectChanges();
      }, 0);

    });
  }

  getNewPageData(pageNo: number) {
    this.reqData.pageNo = pageNo;
    this.getHeadCountData();
  }

  getNewPageOffsetData(pageOffset: number) {
    this.reqData.pageNo = 0;
    this.reqData.pageOffset = pageOffset;
    this.getHeadCountData();
  }

  sortHeadcountBy(field: string) {
    this.reqData.sortBy = field;
    this.reqData.pageNo = 0;  //reset page number to zero after setting sorting field
    this.getHeadCountData();
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  navigateByUrl(url: string) {
    this.appService.navigateByUrl(url);
  }

  setMenu(menu: string) {
    this.headcountService.setHeadcountMenu(menu);
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

}
