import { TestBed } from '@angular/core/testing';

import { EmpleatService } from './empleat.service';

describe('EmpleatService', () => {
  let service: EmpleatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
