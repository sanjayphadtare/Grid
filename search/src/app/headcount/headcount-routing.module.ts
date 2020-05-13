import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadcountComponent } from './headcount.component';
import { HeadcountHomeComponent } from './headcount-home/headcount-home.component';
import { ChangeRequestComponent } from './change-request/change-request.component';
import { DirectCostComponent } from './direct-cost/direct-cost.component';
import { PlanHeadcountComponent } from './plan-headcount/plan-headcount.component';
import { PlanAllocationComponent } from './plan-allocation/plan-allocation.component';


const routes: Routes = [
  {
    path: '',
    component: HeadcountComponent,
    children: [
      {
        path: 'home',
        component: HeadcountHomeComponent
      },
      {
        path: 'change-req',
        component: ChangeRequestComponent
      },
      {
        path: 'direct-cost',
        component: DirectCostComponent
      },
      {
        path: 'plan-headcount',
        component: PlanHeadcountComponent
      },
      {
        path: 'plan-alloc',
        component: PlanAllocationComponent
      },
      {
        path: '',
        redirectTo: 'home'
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadcountRoutingModule { }
