import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRoleComponent } from './new-role.component';
import { NewRoleRoutingModule } from './new-role-routing.module';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { AllocationComponent } from './allocation/allocation.component';
import { ReviewConfirmComponent } from './review-confirm/review-confirm.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [NewRoleComponent, RoleDetailsComponent, AllocationComponent, ReviewConfirmComponent],
  imports: [
    // CommonModule,
    NewRoleRoutingModule,
    SharedModule
  ]
})
export class NewRoleModule { }
