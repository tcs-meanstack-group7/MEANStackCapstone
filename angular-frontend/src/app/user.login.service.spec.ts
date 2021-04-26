import { TestBed } from '@angular/core/testing';

import { User.LoginService } from './user.login.service';

describe('User.LoginService', () => {
  let service: User.LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(User.LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
