import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AppMenus } from '../shared/config/constants';
import { AppService } from '../app.service';

@Component({
  selector: 'pion-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuBarComponent implements OnInit {
  selectedMenu$: Observable<string>;

  AppMenus = AppMenus;

  constructor(
    private appService: AppService
  ) {
    this.selectedMenu$ = this.appService.selectedAppMenu$;
  }

  ngOnInit() {}

  navigateByUrl(url: string) {
    this.appService.navigateByUrl(url);
  }

}
