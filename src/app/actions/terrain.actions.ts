import { Action } from '@ngrx/store';

export enum TerrainActions {
  LOAD_TERRAINS = '[Terrain] Load Terrains',
  LOAD_TERRAINS_SUCCESS = '[Terrain] Load Terrains Success',
  LOAD_ERROR = '[Terrain] Load Error',
  CLEAR_ALL = '[Terrain] Clear All'
}

export class LoadTerrains implements Action {
  readonly type = TerrainActions.LOAD_TERRAINS;

  constructor(public payload: string) {
  }
}

export class LoadTerrainSuccess implements Action {
  readonly type = TerrainActions.LOAD_TERRAINS_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoadError implements Action {
  readonly type = TerrainActions.LOAD_ERROR;

  constructor(public payload: any) {
  }
}

export class ClearAll implements Action {
  readonly type = TerrainActions.CLEAR_ALL;
}

export type AllTerrainActions =
  | LoadTerrains
  | LoadTerrainSuccess
  | LoadError
  | ClearAll;
