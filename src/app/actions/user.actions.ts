import { createAction, props } from '@ngrx/store';

import { UserInterface } from '../models/user.interface';

export const LOAD_USER = '[USER] Load User';

export const CLEAR_USER = '[USER] Clear User';

export const loadUser = createAction(LOAD_USER, props<UserInterface>());

export const clearUser = createAction(CLEAR_USER);
