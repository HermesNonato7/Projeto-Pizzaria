import { TestBed } from '@angular/core/testing';

import { PodeAtivarGuard } from './pode-ativar.guard';

describe('PodeAtivarGuard', () => {
  let guard: PodeAtivarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PodeAtivarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
