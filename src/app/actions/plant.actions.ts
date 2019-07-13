import { createAction, props } from '@ngrx/store';
import { PlantTypeEnum } from '../models/plant-type.enum';

export const LOAD_PLANT_TYPE = '[PLANT] Load Plant Type';

export const loadPlantType = createAction(LOAD_PLANT_TYPE, props<{ plantType: PlantTypeEnum }>());
