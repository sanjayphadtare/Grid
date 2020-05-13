import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'pion-headcount-home',
  templateUrl: './headcount-home.component.html',
  styleUrls: ['./headcount-home.component.scss']
})
export class HeadcountHomeComponent implements OnInit {

  categories: Array<app.MenuItem> = [
    { label: 'Ctool Id', value: 'ctoolId' },
    { label: 'Employee Id', value: 'employeeId' },
    { label: 'Hire Type', value: 'hireTypeNm' },
    { label: 'Role Action Plan', value: 'roleActionPlanNm' },
    { label: 'Direct Cost- Rest of the years ($)', value: 'directCost' },
    { label: 'Approval Status', value: 'approvalStatusNm' },
    { label: 'Role Start Date', value: 'roleStartDt' },
    { label: 'Role End Date', value: 'roleEndDt' }
  ];

  private singleValueAr = ['ctoolId', 'employeeId', 'hireTypeNm', 'roleActionPlanNm', 'approvalStatusNm'];
  private doubleValueAr = ['directCost'];
  private doubleDateValueAr = ['roleStartDt', 'roleEndDt'];

  private singleValue = '';
  private doubleValue = { from: '', to: '' };

  valueBoxes: 'Single' | 'Double' | 'DoubleDate' = 'Single';

  private selectedCategory = this.categories[0];
  selectedItems: Array<{ category: app.MenuItem, value: string }> = [];

  @ViewChild('filterForm', {static: true})
  filterForm: ElementRef;

  constructor() { }

  ngOnInit() {
  }


  categoryChanged(item: app.MenuItem) {
     //clear all input fields when category changed
    this.filterForm.nativeElement.querySelectorAll("input").forEach(elem => elem.value = '');
    this.selectedCategory = item;
    if (this.singleValueAr.includes(item.value as string)) {
      this.valueBoxes = 'Single';
    } else if (this.doubleValueAr.includes(item.value as string)) {
      this.valueBoxes = 'Double';
    } else if (this.doubleDateValueAr.includes(item.value as string)) {
      this.valueBoxes = 'DoubleDate';
    }
  }

  singleValueChanged(singleValue: string) {
    this.singleValue = singleValue;
  }
  doubleFromValueChanged(from: string) {
    this.doubleValue.from = from;
  }
  doubleToValueChanged(to: string) {
    this.doubleValue.to = to;
  }

  addCategory() {
    if (this.selectedItems.length >= 4) { return; }
    let item: any = {};
    if (this.valueBoxes == 'Single') {
      item = { category: this.selectedCategory, value: this.singleValue };
    } else if (this.valueBoxes == 'Double' || this.valueBoxes == 'DoubleDate') {
      item = { category: this.selectedCategory, value: this.doubleValue.from + ' to ' + this.doubleValue.to };
      this.selectedItems.push(item);
    }

    const existingItem = this.selectedItems.filter(selItem => selItem.category.value === item.category.value);
    if (existingItem.length > 0) {
      existingItem[0].value = item.value;
    } else {
      this.selectedItems.push(item);
    }
  }

  removeCategory(itemToRemove: any) {
    this.selectedItems = this.selectedItems.filter(item => item.category.value !== itemToRemove.category.value);
  }

  applyFilter() {
    console.log("selected items: ", this.selectedItems.map(item => item.category.value + "-" + item.value));
    this.clearAll();
  }

  clearAll() {
    this.selectedCategory = this.categories[0];
    this.singleValue = '';
    this.doubleValue = { from: '', to: '' };

    this.valueBoxes = 'Single';

    //clear all input fields
    this.filterForm.nativeElement.querySelectorAll("input").forEach(elem => elem.value = '');
    this.selectedItems = [];
  }

  closeModal() {
    this.clearAll();
  }

}
