import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { AppService } from './app.service';
import { AppMenus } from './shared/config/constants';

@Component({
  selector: 'pion-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Pioneer';

  private unsubscribeSubject = new Subject();
  private unsubscribe$ = this.unsubscribeSubject.asObservable();

  showMenuBar$: Observable<boolean> = this.appService.showMenuBar$;

  constructor(private router: Router, private appService: AppService) {
    // this.showMenuBar$ = this.appService.showMenuBar$;
  }

  ngOnInit() {
    this.router.events.pipe(
      takeUntil(this.unsubscribe$),
      filter(e => e instanceof NavigationEnd),
    ).subscribe((e: NavigationEnd) => {
      if(e.url.includes('headcount') || e.urlAfterRedirects.includes('headcount')) {
        this.appService.setAppMenu(AppMenus.HEADCOUNT);
      } else if(e.url.includes('dashboard') || e.urlAfterRedirects.includes('dashboard')) {
        this.appService.setAppMenu(AppMenus.DASHBOARD);
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}
