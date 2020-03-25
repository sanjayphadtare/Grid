import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from '../app.service';
import { NewRoleService } from './new-role.service';

@Component({
  selector: 'pion-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewRoleComponent implements OnInit, OnDestroy {

  constructor(
    private appService: AppService,
    private newRoleService: NewRoleService
  ) { }


  ngOnInit() {
    // Hide the menu bar when new role creation is started
    this.appService.setMenuBarVisibility(false);
  }

  ngOnDestroy() {
    // show the menu bar after role creation is done
    this.appService.setMenuBarVisibility(true);
  }

}
