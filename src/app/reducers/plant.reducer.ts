import { createReducer, on } from '@ngrx/store';

import { changePageSize, loadPlantEntities, loadPlantPagination, loadPlantType, nextPage, previousPage } from '../actions/plant.actions';

import { plantEntityAdapter } from '../entity-adapters/plant-entity.adapter';

import { PlantScreenInterface } from '../models/plant-screen.interface';
import { PlantTypeEnum } from '../models/plant-type.enum';

export const plantReducer = createReducer<PlantScreenInterface>(plantEntityAdapter.getInitialState({
    plantType: PlantTypeEnum.ENTRANCE,
    loading: false,
    pagination: {
      pageIndex: 0,
      pageSize: 10,
      length: 0
    }
  }),
  on(loadPlantType, (state, {plantType}) => ({
    ...state, plantType, pagination: {
      pageIndex: 0,
      pageSize: 10
    },
    loading: true
  })),
  on(nextPage, state => ({
    ...state,
    pagination: {
      pageIndex: state.pagination.pageIndex + 1
    },
    loading: true
  })),
  on(previousPage, state => ({
    ...state,
    pagination: {
      pageIndex: state.pagination.pageIndex ? state.pagination.pageIndex - 1 : 0
    },
    loading: true
  })),
  on(changePageSize, ((state, {pageSize}) => ({
    ...state,
    pagination: {
      pageSize
    },
    loading: true
  }))),
  on(loadPlantEntities, (state, {entities, total = 0}) => plantEntityAdapter.addAll(entities, {
    ...state,
    loading: false,
    pagination: {
      length: total
    }
  })),
  on(loadPlantPagination, (state, {pagination}) => ({...state, pagination, loading: true})));
