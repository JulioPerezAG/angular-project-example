import { createReducer, on } from '@ngrx/store';

import { clearUser, loadUser } from '../actions/user.actions';
import { UserInterface } from '../models/user.interface';

export const userReducer = createReducer<UserInterface>({
  rol: ''
  },
  on(loadUser, (state, userCredentials) => ({...state, ...userCredentials})),
  on(clearUser, () => ({
    rol: ''
  })));
