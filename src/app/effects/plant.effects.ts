import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';

import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { loadPlantEntities, loadPlantPagination, loadPlantType } from '../actions/plant.actions';
import { selectPlantPagination, selectPlantType } from '../selectors/plant.selectors';
import { selectUserPlantId } from '../selectors/user.selectors';

import { PlantService } from '../services/plant.service';

import { AppStateInterface } from '../models/app-state.interface';

@Injectable()
export class PlantEffects {

  constructor(private actions$: Actions, private store: Store<AppStateInterface>, private plantService: PlantService) {
  }

  loadPlantType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPlantType, loadPlantPagination), // nextPage, previousPage, changePageSize,
      withLatestFrom(this.store.pipe(select(selectPlantType))),
      withLatestFrom(this.store.pipe(select(selectPlantPagination))),
      withLatestFrom(this.store.pipe(select(selectUserPlantId))),
      switchMap(([[[action, plantType], {pageIndex, pageSize}], plantId]) =>
        this.plantService.getPlant(plantType, plantId, `${pageIndex}`, `${pageSize}`)
          .pipe(map(plant => loadPlantEntities(plant)))
      )));
}
