import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as fromTerrainsActions from '../actions/terrain.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { MapService } from '../services/map.service';
import { TerrainInterface } from '../models/terrain.interface';

@Injectable()
export class TerrainEffects {

  constructor(private mapService: MapService, private action$: Actions) {
  }

  @Effect()
  terrains$: Observable<Action> = this.action$.pipe(
    ofType(fromTerrainsActions.TerrainActions.LOAD_TERRAINS),
    mergeMap((action: any) => {
      return this.mapService.getTerrainsByIdPlant(action.payload).pipe(
        map((data: TerrainInterface[]) => {
          return new fromTerrainsActions.LoadTerrainSuccess(data);
        }),
        catchError(() => of(new fromTerrainsActions.LoadError('Ocurrio un error en la carga de parcelas')))
      )}
    )
  );

}
