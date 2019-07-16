import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { loadError, loadTerrains, loadTerrainSuccess } from '../actions/terrain.actions';

import { MapService } from '../services/map.service';

import { TerrainInterface } from '../models/terrain.interface';

@Injectable()
export class TerrainEffects {

  constructor(private mapService: MapService, private action$: Actions) {
  }

  terrains$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(loadTerrains),
      mergeMap(({payload}) =>
        this.mapService.getTerrainsByIdPlant(payload).pipe(
          map((terrains: TerrainInterface[]) => loadTerrainSuccess({terrains})),
          catchError(() => of(loadError({error: 'Ocurrio un error en la carga de parcelas'}))))
      ))
  );
}
