import { TestBed } from '@angular/core/testing';

import { ValidateService } from './validate.service';

describe('ServicesService', () => {
  let service: ValidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
