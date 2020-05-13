import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'headcount',
    loadChildren: () => import('./headcount/headcount.module').then(m => m.HeadcountModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'new-role',
    loadChildren: () => import('./new-role/new-role.module').then(m => m.NewRoleModule)
  },
  {
    path: '',
    redirectTo: 'headcount',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
