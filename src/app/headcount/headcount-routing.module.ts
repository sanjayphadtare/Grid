import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadcountComponent } from './headcount.component';


const routes: Routes = [
  {
    path: '',
    component: HeadcountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadcountRoutingModule { }
