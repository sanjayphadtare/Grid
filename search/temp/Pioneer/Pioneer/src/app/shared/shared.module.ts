import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTabsComponent } from './components/menu-tabs/menu-tabs.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DynamicGridComponent } from './components/dynamic-grid/dynamic-grid.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';

@NgModule({
  declarations: [MenuTabsComponent, DropdownComponent, DatepickerComponent, DynamicGridComponent, PaginationComponent, ContextMenuComponent],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  exports: [
    BsDropdownModule,
    BsDatepickerModule,
    AccordionModule,
    MenuTabsComponent,
    DropdownComponent,
    DatepickerComponent,
    DynamicGridComponent,
    PaginationComponent,
    ContextMenuComponent
  ]
})
export class SharedModule { }
