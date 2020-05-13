import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadcountHomeComponent } from './headcount-home.component';

describe('HeadcountHomeComponent', () => {
  let component: HeadcountHomeComponent;
  let fixture: ComponentFixture<HeadcountHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadcountHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadcountHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
