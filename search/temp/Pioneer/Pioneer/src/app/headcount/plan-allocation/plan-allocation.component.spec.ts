import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAllocationComponent } from './plan-allocation.component';

describe('PlanAllocationComponent', () => {
  let component: PlanAllocationComponent;
  let fixture: ComponentFixture<PlanAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
