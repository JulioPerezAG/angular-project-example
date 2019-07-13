import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { selectPlantEntities, selectPlantType, selectPlatLoading } from '../../selectors/plant.selectors';

import { AppStateInterface } from '../../models/app-state.interface';
import { PlantType } from '../../models/plant.type';

@Component({
  selector: 'app-plant-entities',
  templateUrl: './plant-entities.component.html'
})
export class PlantEntitiesComponent implements OnInit {

  plantType: Observable<PlantType>;

  data: Observable<any[]>;

  isLoading: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.plantType = this.store.pipe(select(selectPlantType));
    this.data = this.store.pipe(select(selectPlantEntities));
    this.isLoading = this.store.pipe(select(selectPlatLoading));
  }
}
