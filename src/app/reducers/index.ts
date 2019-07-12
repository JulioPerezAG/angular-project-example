import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { StateInterface } from '../models/state.interface';
import { loginReducer } from './login.reducers';
import { userReducer } from './user.reducer';
import { terrainReducer } from './terrain.reducer';

export const reducers: ActionReducerMap<StateInterface> = {
  login: loginReducer,
  user: userReducer,
  terrains: terrainReducer
};


export const metaReducers: MetaReducer<StateInterface>[] = !environment.production ? [] : [];
