import { Component, OnInit, HostListener, ViewChild, AfterViewInit, ElementRef, ContentChild, AfterContentInit, OnChanges, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'pion-dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.scss']
})
export class DynamicGridComponent implements OnInit, AfterContentInit {

  @ViewChild('grid', { static: true })
  grid: ElementRef;

  thead: HTMLElement;
  tbody: HTMLElement;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterContentInit() {

    const container = this.grid.nativeElement;

    // Store references to table elements
    this.thead = container.querySelector('thead');
    this.tbody = container.querySelector('tbody');

    // Style container
    container.style.overflow = 'auto';
    container.style.position = 'relative';

    this.relayout();
    
    let resizeTimeout = null;
    // Update table cell dimensions on resize
    window.addEventListener('resize', () => {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout( () => {
          resizeTimeout = null;
          this.relayout();
        }, 500);
      }
    }, false);

    // scroll event will change the transform property to change the perspective of the fixed columns
    container.addEventListener('scroll', () => {
      this.thead.style.transform = 'translate3d(0,' + container.scrollTop + 'px,0)';
      const hTransform = 'translate3d(' + container.scrollLeft + 'px,0,0)';
      this.thead.querySelector('th').style.transform = hTransform;
      [].slice.call(container.querySelectorAll('tr > td[fixed], tr > th[fixed]'))
        .forEach(function (td) {
          td.style.transform = hTransform;
        });
    });

  }

  // Add inline styles to fix the header row and leftmost column
  relayout() {

    const ths = [].slice.call(this.thead.querySelectorAll('th')); // select all th elements
    const trs = [].slice.call(this.grid.nativeElement.querySelectorAll('tr')); // select all tr elements 

    //Remove inline styles so we resort to the default table layout algorithm
    //For thead, th, and td elements, don't remove the 'transform' styles appliedby the scroll event listener
    this.tbody.setAttribute('style', '');
    this.thead.style.width = '';
    this.thead.style.position = '';
    this.thead.style.top = '';
    this.thead.style.left = '';
    this.thead.style.zIndex = '';
    ths.forEach(function (th) {
      th.style.display = '';
      th.style.width = '';
      th.style.position = '';
      th.style.top = '';
      th.style.left = '';
    });
    trs.forEach(function (tr) {
      tr.setAttribute('style', '');
    });
    [].slice.call(this.tbody.querySelectorAll('td'))
      .forEach(function (td) {
        td.style.width = '';
        td.style.position = '';
        td.style.left = '';
      });

    //Store width and height of each th
    //getBoundingClientRect()'s dimensions include paddings and borders
    let left = 0;
    const thStyles = ths.map(function (th) {
      const rect = th.getBoundingClientRect();
      const style = document.defaultView.getComputedStyle(th, '');
      left += rect.width;
      return {
        boundingWidth: rect.width,
        boundingHeight: rect.height,
        width: parseInt(style.width, 10),
        paddingLeft: parseInt(style.paddingLeft, 10),
        left: left - rect.width
      };
    });

    // Set widths of thead and tbody
    const totalWidth = thStyles.reduce(function (sum, cur) {
      return sum + cur.boundingWidth;
    }, 0);
    this.tbody.style.display = 'block';
    this.tbody.style.width = totalWidth + 'px';
    this.thead.style.width = totalWidth + 'px';

    // Position thead
    this.thead.style.position = 'absolute';
    this.thead.style.top = '0';
    this.thead.style.zIndex = '10';

    let fixedWidth = 0;
    ths.forEach(function (th, i) { 
      if (th.hasAttribute('fixed')) {
        fixedWidth += thStyles[i].width;
      }
    });

    // Set margin-top for tbody - the fixed header is displayed in this margin
    this.tbody.style.marginTop = thStyles[0].boundingHeight + 'px';

    // Set widths of the td elements in this.tbody. For the fixed td, set its position
    trs.forEach(function (tr, i) {
      tr.style.display = 'block';
      tr.style.paddingLeft = fixedWidth + 'px';
      [].slice.call(tr.querySelectorAll('td, th'))
        .forEach(function (td, j) {
          td.style.width = thStyles[j].width + 'px';
          if (td.hasAttribute('fixed')) {
            td.style.position = 'absolute';
            td.style.left = thStyles[j].left + 'px';
          }
        });
    });
    this.cd.detectChanges();
  }// end function relayout

}
