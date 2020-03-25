import { TestBed } from '@angular/core/testing';

import { NewRoleService } from './new-role.service';

describe('NewRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewRoleService = TestBed.get(NewRoleService);
    expect(service).toBeTruthy();
  });
});
