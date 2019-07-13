import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';

import { AppStateInterface } from '../models/app-state.interface';

import { loginReducer } from './login.reducers';
import { userReducer } from './user.reducer';
import { terrainReducer } from './terrain.reducer';
import { plantReducer } from './plant.reducer';

export const reducers: ActionReducerMap<AppStateInterface> = {
  login: loginReducer,
  user: userReducer,
  terrains: terrainReducer,
  plant: plantReducer
};

export const metaReducers: MetaReducer<AppStateInterface>[] = !environment.production ? [] : [];
