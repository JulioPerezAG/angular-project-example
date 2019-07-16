import { createReducer, on } from '@ngrx/store';

import { TerrainScreenInterface } from '../models/terrain-screen.interface';

import { clearAll, loadError, loadTerrains, loadTerrainSuccess } from '../actions/terrain.actions';

export const terrainReducer = createReducer<TerrainScreenInterface>({
    isLoading: false,
    terrains: [],
    msg_error: ''
  },
  on(loadTerrains, state => ({
    ...state,
    isLoading: true
  })),
  on(loadTerrainSuccess, (state, {terrains}) => ({
    ...state,
    isLoading: false,
    terrains
  })),
  on(loadError, (state, {error}) => ({
    ...state,
    isLoading: false,
    msg_error: error
  })),
  on(clearAll, state => ({
    ...state,
    isLoading: false,
    terrains: []
  })));
