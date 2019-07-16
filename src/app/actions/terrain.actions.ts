import { createAction, props } from '@ngrx/store';

import { TerrainInterface } from '../models/terrain.interface';

export const LOAD_TERRAINS = '[TERRAIN] Load Terrains';

export const LOAD_TERRAINS_SUCCESS = '[Terrain] Load Terrains Success';

export const LOAD_ERROR = '[Terrain] Load Error';

export const CLEAR_ALL = '[Terrain] Clear All';

export const loadTerrains = createAction(LOAD_TERRAINS, props<{ payload: string }>());

export const loadTerrainSuccess = createAction(LOAD_TERRAINS_SUCCESS, props<{ terrains: TerrainInterface[] }>());

export const loadError = createAction(LOAD_ERROR, props<{ error: any }>());

export const clearAll = createAction(CLEAR_ALL);
