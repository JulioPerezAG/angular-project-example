import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '../models/app-state.interface';

export const selectLogin = (state: AppStateInterface) => state.login;

export const selectIsLoading = createSelector(selectLogin, state => state.loading);

export const selectLoginErrors = createSelector(selectLogin, state => state.errors);
