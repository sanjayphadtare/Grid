import { Component, OnInit, Output, EventEmitter, LOCALE_ID } from '@angular/core';
import { formatMoment } from 'ngx-bootstrap/chronos/format';
import { Locale } from 'ngx-bootstrap/chronos/locale/locale.class';

@Component({
  selector: 'pion-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  bsConfig = { isAnimated: true, containerClass: 'theme-default', adaptivePosition: true };
  bsValue = new Date();

  @Output('changed')
  changed = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  inputClickHandler($event: MouseEvent) {
    $event.stopImmediatePropagation();
  }

  dateChanged(value: Date) {
    this.changed.emit(value);
  }

}
