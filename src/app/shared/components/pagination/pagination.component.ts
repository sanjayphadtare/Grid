import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pion-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  showCounts: Array<app.MenuItem> = [{label: '10', value: '10'}, {label: '15', value: '15'}];
  selectedCount: app.MenuItem = {label: '10', value: '10'};

  @Input('currentPage')
  currentPage: number = 1;

  @Input('pageSize')
  pageSize: number = 15;

  @Input('totalCount')
  totalCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
