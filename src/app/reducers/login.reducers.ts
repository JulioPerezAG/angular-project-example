import { createReducer, on } from '@ngrx/store';

import { finishLoad, signInFailure, startLoad } from '../actions/login.actions';

export const loginReducer = createReducer({
    loading: false,
    errors: null
  }, on(startLoad, state => ({...state, loading: true})),
  on(finishLoad, state => ({...state, loading: false})),
  on(signInFailure, (state, action) => ({...state, errors: action.reason})));
