import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HeadcountMenus } from '../shared/config/constants';
import { HeadcountService } from './headcount.service';
import { AppService } from '../app.service';
import { Subject } from 'rxjs';

const COLS_MAPPINGS = [
  { title: 'CToolId', field: 'position_id', sortable: true, fixed: true },
  { title: 'Approval Status', field: 'approval_status', sortable: true, fixed: true },
  { title: 'Pending With', field: 'pending_with', sortable: true, fixed: false },
  { title: 'Employee Id', field: 'ghrs_employee_id', sortable: true, sorter: 'number' , fixed: false},
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
export class HeadcountComponent implements OnInit {

  selectedMenu$: Observable<string>;
  Menus = HeadcountMenus;
  COLS_MAPPINGS: Array<any> = [];
  headcountItems: Array<app.HeadcountItem> = [];
  showFilters = false;

  roleContextMenuItems = ['Edit role', 'Copy role', 'Recall role', 'Convert role', 'Migrate role', 'Internal Transfer', 'Demise role'];

  constructor(private headcountService: HeadcountService, private appService: AppService, private cd: ChangeDetectorRef) {
    this.selectedMenu$ = this.headcountService.selectedHeadcountMenu$;
  }

  ngOnInit() {
    this.headcountService.setHeadcountMenu(this.Menus.HEADCOUNT);
    this.headcountService.getHeadcountData().subscribe(res => {
      this.COLS_MAPPINGS = res.result.columns;
      this.headcountItems = res.result.data.slice(0, 5);
      console.log('COLS_MAPPINGS: ', this.COLS_MAPPINGS);
      console.log(this.headcountItems);
      this.cd.detectChanges();
    });
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
}
