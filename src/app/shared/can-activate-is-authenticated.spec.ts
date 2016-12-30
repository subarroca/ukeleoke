/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanActivateIsAuthenticated } from './can-activate-is-authenticated';

describe('CanActivateIsAuthenticated', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateIsAuthenticated]
    });
  });

  it('should ...', inject([CanActivateIsAuthenticated], (service: CanActivateIsAuthenticated) => {
    expect(service).toBeTruthy();
  }));
});
