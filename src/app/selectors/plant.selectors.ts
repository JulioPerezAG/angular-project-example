import { AppStateInterface } from '../models/app-state.interface';
import { createSelector } from '@ngrx/store';

export const selectPlant = (state: AppStateInterface) => state.plant;

export const selectPlatLoading = createSelector(selectPlant, state => state.loading);

export const selectPlantPagination = createSelector(selectPlant, s1 => s1.pagination);

export const selectPlantType = createSelector(selectPlant, s1 => s1.plantType);
