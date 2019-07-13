import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { selectUserToken } from '../selectors/user.selectors';

import { StateInterface } from '../models/state.interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<StateInterface>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.pipe(select(selectUserToken)).pipe(mergeMap(token => next.handle(req.clone({
      headers: new HttpHeaders({
        Authorization: token,
        'Content-Type': 'application/json'
      })
    }))));
  }
}
