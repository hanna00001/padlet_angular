import { TestBed } from '@angular/core/testing';

import { EntrieService } from './entrie.service';

describe('EntrieService', () => {
  let service: EntrieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
