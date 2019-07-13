import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';

import { loadPlantType } from '../actions/plant.actions';

import { AppStateInterface } from '../models/app-state.interface';
import { PlantType } from '../models/plant.type';

@Injectable()
export class PlantEntitiesResolve implements Resolve<boolean> {

  constructor(private store: Store<AppStateInterface>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store.dispatch(loadPlantType({plantType: route.paramMap.get('plantType') as PlantType}));
    return true;
  }
}
