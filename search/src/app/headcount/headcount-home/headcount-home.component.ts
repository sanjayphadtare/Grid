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
    { label: 'Role End Date', value: 'roleEndDt' },
    { label: 'BF Level 3', value: 'bfLevel3' }
  ];

  private dropdownValues = {
    bfLevel3: [
      { label: 'Level 1', value: 'level1' },
      { label: 'Level 2', value: 'level2' },
      { label: 'Level 3', value: 'level3' }
    ]
  };

  currentDropdownValues: Array<app.MenuItem> = [];

  private singleValueAr = ['ctoolId', 'employeeId', 'hireTypeNm', 'roleActionPlanNm', 'approvalStatusNm'];
  private doubleValueAr = ['directCost'];
  private doubleDateValueAr = ['roleStartDt', 'roleEndDt'];
  private dropdownValueAr = ['bfLevel3']

  private singleValue = '';
  private doubleValue = { from: '', to: '' };
  private dropdownValue = '';

  valueBoxes: 'Single' | 'Double' | 'DoubleDate' | 'Dropdown' = 'Single';

  private selectedCategory = this.categories[0];
  selectedItems: Array<{ category: app.MenuItem, value: string }> = [];

  @ViewChild('filterForm', { static: true })
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
    } else if (this.dropdownValueAr.includes(item.value as string)) {
      this.valueBoxes = 'Dropdown';
      this.currentDropdownValues = this.dropdownValues[item.value as string];
      this.dropdownValue = this.currentDropdownValues[0].value as string;
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
  dropdownChanged(item: app.MenuItem) {
    this.dropdownValue = item.value as string;
  }

  addCategory() {
    if (this.selectedItems.length >= 4) { return; }
    let value: string = '';
    if (this.valueBoxes == 'Single') {
      value = this.singleValue;
    } else if (this.valueBoxes == 'Double' || this.valueBoxes == 'DoubleDate') {
      value = this.doubleValue.from + ' to ' + this.doubleValue.to;
    } else if (this.valueBoxes == 'Dropdown') {
      value = this.dropdownValue;
    }

    const item = { category: this.selectedCategory, value: value };

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
    this.dropdownValue = '';

    this.valueBoxes = 'Single';
    this.currentDropdownValues = [];

    //clear all input fields
    this.filterForm.nativeElement.querySelectorAll("input").forEach(elem => elem.value = '');
    this.selectedItems = [];
  }

  closeModal() {
    this.clearAll();
  }

}
