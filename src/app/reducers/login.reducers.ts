import { createReducer, on } from '@ngrx/store';

import { finishLoad, signIn, signInFailure } from '../actions/login.actions';

export const loginReducer = createReducer({
    loading: false,
    errors: null
  }, on(signIn, state => ({...state, loading: true})),
  on(finishLoad, state => ({...state, loading: false})),
  on(signInFailure, (state, action) => ({...state, errors: action.reason})));
