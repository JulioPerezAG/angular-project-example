import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, exhaustMap, switchMap, tap } from 'rxjs/operators';

import { finishLoad, signIn, signInFailure, signInSuccess, signOut, signOutSuccess } from '../actions/login.actions';
import { clearUser, loadUser } from '../actions/user.actions';

import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private router: Router, private authService: AuthService) {
  }

  signInEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signIn),
      exhaustMap(action => this.authService.signIn(action.email, action.password).pipe(
        switchMap(user => [loadUser(user), finishLoad(), signInSuccess()]),
        catchError(reason => {
          console.log(reason);
          return of(signInFailure({reason}));
        })
      ))));

  signInSuccessEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signInSuccess),
      tap(_ => this.router.navigate(['home']))
    ), {dispatch: false});

  signOutEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signOut),
      exhaustMap(() => this.authService.signOut().pipe(
        switchMap(() => [clearUser(), signOutSuccess()]),
        catchError(() => of(signOutSuccess()))
      ))
    ));

  signOutSuccessEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signOutSuccess),
      tap(_ => this.router.navigate(['login']))
    ), {dispatch: false});
}
