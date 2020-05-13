import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pion-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input('items')
  items: Array<app.MenuItem> = [];

  @Input('selectedItem')
  selectedItem: app.MenuItem;

  @Output('itemChanged')
  itemChanged = new EventEmitter<app.MenuItem>();
  
  constructor() { }

  ngOnInit() {
  }

  valueChanged($event: any) {
    this.selectedItem = this.items.find(item => item.value == $event.target.value);
    this.itemChanged.emit(this.selectedItem);
  }

}
