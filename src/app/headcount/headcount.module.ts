import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadcountRoutingModule } from './headcount-routing.module';
import { HeadcountComponent } from './headcount.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HeadcountComponent],
  imports: [
    CommonModule,
    HeadcountRoutingModule,
    SharedModule
  ]
})
export class HeadcountModule { }
