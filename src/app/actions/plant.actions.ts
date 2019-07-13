import { createAction, props } from '@ngrx/store';

import { PlantEntityType } from '../models/plant-entity.type';
import { PaginationInterface } from '../models/pagination.interface';
import { PlantType } from '../models/plant.type';

export const LOAD_PLANT_TYPE = '[PLANT] Load Plant Type';

export const NEXT_PAGE = '[PLANT] Next Page';

export const PREVIOUS_PAGE = '[PLANT] Previous Page';

export const CHANGE_PAGE_SIZE = '[PLANT] Change Plant Size';

export const LOAD_PLANT_ENTITIES = '[PLANT] Load Plant Entities';

export const LOAD_PLANT_PAGINATION = '[PLANT] Load Plant Pagination';

export const loadPlantType = createAction(LOAD_PLANT_TYPE, props<{ plantType: PlantType }>());

export const nextPage = createAction(NEXT_PAGE);

export const previousPage = createAction(PREVIOUS_PAGE);

export const changePageSize = createAction(CHANGE_PAGE_SIZE, props<{ pageSize }>());

export const loadPlantEntities = createAction(LOAD_PLANT_ENTITIES, props<{ entities: PlantEntityType[], total: number }>());

export const loadPlantPagination = createAction(LOAD_PLANT_PAGINATION, props<{ pagination: PaginationInterface }>());
