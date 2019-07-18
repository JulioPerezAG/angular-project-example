import { AppStateInterface } from '../models/app-state.interface';
import { createSelector } from '@ngrx/store';
import { plantEntityAdapter } from '../entity-adapters/plant-entity.adapter';

export const selectPlant = (state: AppStateInterface) => state.plant;

export const selectPlatLoading = createSelector(selectPlant, state => state.loading);

export const selectPlantPagination = createSelector(selectPlant, s1 => s1.pagination);

export const selectPlantType = createSelector(selectPlant, s1 => s1.plantType);

export const selectPlantEntities = plantEntityAdapter.getSelectors(selectPlant).selectAll;

export const selectPlantFormulas = createSelector(selectPlant, s1 => s1.formulas);
