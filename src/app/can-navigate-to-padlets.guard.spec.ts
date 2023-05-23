import { TestBed } from '@angular/core/testing';

import { CanNavigateToPadletsGuard } from './can-navigate-to-padlets.guard';

describe('CanNavigateToPadletsGuard', () => {
  let guard: CanNavigateToPadletsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanNavigateToPadletsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
