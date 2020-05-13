import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadcountRoutingModule } from './headcount-routing.module';
import { HeadcountComponent } from './headcount.component';
import { SharedModule } from '../shared/shared.module';
import { HeadcountHomeComponent } from './headcount-home/headcount-home.component';
import { ChangeRequestComponent } from './change-request/change-request.component';
import { DirectCostComponent } from './direct-cost/direct-cost.component';
import { PlanHeadcountComponent } from './plan-headcount/plan-headcount.component';
import { PlanAllocationComponent } from './plan-allocation/plan-allocation.component';


@NgModule({
  declarations: [HeadcountComponent, HeadcountHomeComponent, ChangeRequestComponent, DirectCostComponent, PlanHeadcountComponent, PlanAllocationComponent],
  imports: [
    CommonModule,
    HeadcountRoutingModule,
    SharedModule
  ]
})
export class HeadcountModule { }
