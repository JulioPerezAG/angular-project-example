import { StateInterface } from '../models/state.interface';
import { createSelector } from '@ngrx/store';

export const selectUser = (state: StateInterface) => state.user;

export const selectUserToken = createSelector(selectUser, state => state.token);

export const selectUserRol = createSelector(selectUser, s1 => s1.rol);
