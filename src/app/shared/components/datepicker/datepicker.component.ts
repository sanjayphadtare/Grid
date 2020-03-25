import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pion-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  bsConfig = { isAnimated: true, containerClass: 'theme-default', adaptivePosition: true };
  bsValue = new Date();

  constructor() { }

  ngOnInit() {
  }

  inputClickHandler($event: MouseEvent) {
    $event.stopImmediatePropagation();
  }

}
