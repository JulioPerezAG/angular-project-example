import { createReducer, on } from '@ngrx/store';

import { finishLoad, signIn, signInFailure } from '../actions/login.actions';

import { LoginScreenInterface } from '../models/login-screen.interface';

export const loginReducer = createReducer<LoginScreenInterface>({
    loading: false,
    errors: null
  }, on(signIn, state => ({...state, loading: true})),
  on(finishLoad, state => ({...state, loading: false})),
  on(signInFailure, (state, action) => ({...state, errors: action.reason})));
