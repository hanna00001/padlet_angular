import { TestBed } from '@angular/core/testing';

import { PadletService } from './padlet.service';

describe('PadletService', () => {
  let service: PadletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
