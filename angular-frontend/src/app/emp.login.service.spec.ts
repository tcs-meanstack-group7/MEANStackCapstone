import { TestBed } from '@angular/core/testing';

import { Emp.LoginService } from './emp.login.service';

describe('Emp.LoginService', () => {
  let service: Emp.LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Emp.LoginService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
