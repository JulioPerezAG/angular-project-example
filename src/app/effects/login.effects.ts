import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { from, of } from 'rxjs';
import { catchError, exhaustMap, switchMap, tap } from 'rxjs/operators';

import { finishLoad, fireAuthSuccess, signIn, signInFailure, signInSuccess, signOut, signOutSuccess } from '../actions/login.actions';
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
        switchMap(({uid, token}) => [loadUser({uid, token}), fireAuthSuccess({uid, token})]),
        catchError(reason => of(finishLoad(), signInFailure({reason})))))));

  fireAuthSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fireAuthSuccess),
      exhaustMap(action => this.authService.getUserData(action.uid).pipe(
        switchMap(({email, ingenioId, rol}) =>
          [loadUser({email, ingenioId, rol}), signInSuccess()]),
        catchError(reason => of(finishLoad(), signInFailure({reason})))))));

  signInSuccessEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signInSuccess),
      exhaustMap(_ => from(this.router.navigate(['home']))
        .pipe(
          switchMap(result => result ? [finishLoad()] : [finishLoad(), signInFailure({reason: 'User with invalid roles'})]),
          catchError(reason => of(finishLoad(), signInFailure({reason})))))
    ));

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
