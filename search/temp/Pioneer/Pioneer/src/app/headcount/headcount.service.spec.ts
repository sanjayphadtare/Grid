import { TestBed } from '@angular/core/testing';

import { HeadcountService } from './headcount.service';

describe('HeadcountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeadcountService = TestBed.get(HeadcountService);
    expect(service).toBeTruthy();
  });
});
