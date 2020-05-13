import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectCostComponent } from './direct-cost.component';

describe('DirectCostComponent', () => {
  let component: DirectCostComponent;
  let fixture: ComponentFixture<DirectCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
