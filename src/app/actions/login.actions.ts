import { createAction, props } from '@ngrx/store';

import { UserInterface } from '../models/user.interface';

export const SIGN_IN = '[LOGIN] Sign In';

export const FIRE_AUTH_SUCCESS = '[LOGIN] Fire Auth Success';

export const SIGN_IN_SUCCESS = '[LOGIN] Sign In Success';

export const START_LOAD = '[LOGIN] Start Load';

export const FINISH_LOAD = '[LOGIN] Finish Load';

export const SIGN_OUT = '[LOGIN] Sign Out';

export const SIGN_IN_FAILURE = '[LOGIN] Sign In Failure';

export const SIGN_OUT_SUCCESS = '[LOGIN] Sign Out Success';

export const signIn = createAction(SIGN_IN, props<{ email: string, password: string }>());

export const fireAuthSuccess = createAction(FIRE_AUTH_SUCCESS, props<UserInterface>());

export const signInSuccess = createAction(SIGN_IN_SUCCESS);

export const startLoad = createAction(START_LOAD);

export const finishLoad = createAction(FINISH_LOAD);

export const signOut = createAction(SIGN_OUT);

export const signInFailure = createAction(SIGN_IN_FAILURE, props<{ reason: string }>());

export const signOutSuccess = createAction(SIGN_OUT_SUCCESS);
