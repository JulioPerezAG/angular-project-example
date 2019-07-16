import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../views/login/login.component';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../models/app-state.interface';
import { selectUserPlantId } from '../selectors/user.selectors';

@Injectable()
export class SaveUserCanDeactivate implements CanDeactivate<LoginComponent> {
  constructor(private store: Store<AppStateInterface>) {
  }

  canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.store.pipe(select(selectUserPlantId)).subscribe(value => console.log(value));
    alert('Aaaaaah');
    return true;
  }
}
