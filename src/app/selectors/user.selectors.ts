import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '../models/app-state.interface';

export const selectUser = (state: AppStateInterface) => state.user;

export const selectUserToken = createSelector(selectUser, state => state.token);

export const selectUserRol = createSelector(selectUser, s1 => s1.rol);

export const selectUserPlantId = createSelector(selectUser, s1 => s1.ingenioId);
