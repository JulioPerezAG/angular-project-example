import { createAction, props } from '@ngrx/store';

import { TerrainInterface } from '../models/terrain.interface';

export const LOAD_TERRAINS = '[TERRAIN] Load Terrains';

export const LOAD_TERRAINS_SUCCESS = '[TERRAIN] Load Terrains Success';

export const LOAD_ERROR = '[TERRAIN] Load Error';

export const CLEAR_ALL = '[TERRAIN] Clear All';

export const loadTerrains = createAction(LOAD_TERRAINS, props<{ payload: string }>());

export const loadTerrainSuccess = createAction(LOAD_TERRAINS_SUCCESS, props<{ terrains: TerrainInterface[] }>());

export const loadError = createAction(LOAD_ERROR, props<{ error: any }>());

export const clearAll = createAction(CLEAR_ALL);
