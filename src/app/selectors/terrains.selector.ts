import { createSelector } from '@ngrx/store';
import { StateInterface } from '../models/state.interface';
import { TerrainScreenInterface } from '../models/terrain-screen.interface';

const getTerrainsState = (state: StateInterface) => state.terrains;

export const getTerrains = createSelector(getTerrainsState, (state: TerrainScreenInterface) => state.terrains);
