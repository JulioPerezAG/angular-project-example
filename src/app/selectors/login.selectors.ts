import { createSelector } from '@ngrx/store';

import { StateInterface } from '../models/state.interface';

export const selectLogin = (state: StateInterface) => state.login;

export const selectIsLoading = createSelector(selectLogin, state => state.loading);

export const selectLoginErrors = createSelector(selectLogin, state => state.errors);
