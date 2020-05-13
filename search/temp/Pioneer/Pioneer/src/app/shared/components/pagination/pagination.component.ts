import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pion-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  offsetCounts: Array<app.MenuItem> = [{label: 10, value: 10}, {label: 15, value: 15}, {label: 20, value: 20}];
  selectedOffset: app.MenuItem = {label: 10, value: 10};

  pageCounts: Array<app.MenuItem> = [];
  selectedPage: app.MenuItem;

  totalPages = 0;

  @Input('pageNo')
  pageNo: number = 0;

  @Input('pageOffset')
  pageOffset: number = 15;

  @Input('totalCount')
  totalCount: number = 100;

  @Output('pageOffsetChanged')
  pageOffsetChanged = new EventEmitter<number>();

  @Output('pageNoChanged')
  pageNoChanged = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.totalPages = Math.ceil(this.totalCount / this.pageOffset);
    this.pageCounts = Array.from(Array(this.totalPages).keys()).map(i => ({label: i + 1, value: i + 1}));
    this.selectedPage = {label: this.pageNo + 1, value: this.pageNo + 1};

    this.selectedOffset = {label: this.pageOffset, value: this.pageOffset};
  }

  prev() {
    if(this.pageNo > 0) {
      this.pageNoChanged.emit(this.pageNo - 1);
    }
  }

  next() {
    if(this.pageNo < this.totalPages) {
      this.pageNoChanged.emit(this.pageNo + 1);
    }
  }

  showPageNumber(newPage: app.MenuItem) {
    this.pageNoChanged.emit(Number(newPage.value) - 1);
  }

  showPageOffset(pageOffset: app.MenuItem) {
    this.pageOffsetChanged.emit(pageOffset.value as number);
  }

}
