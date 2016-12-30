import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import { FirebaseAuth } from 'angularfire2';

@Injectable()
export class CanActivateIsAuthenticated implements CanActivate {

  constructor(
    private auth$: FirebaseAuth
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth$.map(auth => auth !== null);
  }

}
