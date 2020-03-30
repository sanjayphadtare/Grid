import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pion-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {

  @Input('menuItems')
  menuItems: Array<string> = [];
  constructor() { }

  ngOnInit() {
  }

}
