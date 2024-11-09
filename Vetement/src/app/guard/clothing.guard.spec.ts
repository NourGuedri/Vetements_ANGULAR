import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { clothingGuard } from './clothing.guard';

describe('clothingGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => clothingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
