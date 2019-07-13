import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../models/app-state.interface';
import { TerrainScreenInterface } from '../models/terrain-screen.interface';

const getTerrainsState = (state: AppStateInterface) => state.terrains;

export const getTerrains = createSelector(getTerrainsState, (state: TerrainScreenInterface) => state.terrains);
