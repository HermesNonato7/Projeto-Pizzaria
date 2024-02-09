import { TestBed } from '@angular/core/testing';

import { PodeCarregarGuard } from './pode-carregar.guard';

describe('PodeCarregarGuard', () => {
  let guard: PodeCarregarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PodeCarregarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
