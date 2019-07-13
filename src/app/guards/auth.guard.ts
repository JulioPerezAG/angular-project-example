import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../models/app-state.interface';
import { selectUserRol } from '../selectors/user.selectors';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppStateInterface>, private router: Router) {
  }

  canActivate({data: {requiredRoles = []}}: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.store.pipe(select(selectUserRol)).pipe(map(rol => requiredRoles.includes(rol) ? true : this.router.parseUrl('login')));
  }
}
