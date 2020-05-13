import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanHeadcountComponent } from './plan-headcount.component';

describe('PlanHeadcountComponent', () => {
  let component: PlanHeadcountComponent;
  let fixture: ComponentFixture<PlanHeadcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanHeadcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanHeadcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
