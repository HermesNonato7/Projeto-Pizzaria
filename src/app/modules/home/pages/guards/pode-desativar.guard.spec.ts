import { TestBed } from '@angular/core/testing';

import { PodeDesativarGuard } from './pode-desativar.guard';

describe('PodeDesativarGuard', () => {
  let guard: PodeDesativarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PodeDesativarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
