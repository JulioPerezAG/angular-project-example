import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { selectPlantEntities, selectPlantPagination, selectPlantType, selectPlatLoading } from '../../selectors/plant.selectors';

import { AppStateInterface } from '../../models/app-state.interface';
import { PlantType } from '../../models/plant.type';
import { PaginationInterface } from '../../models/pagination.interface';
import { PageEvent } from '@angular/material';
import { loadPlantPagination } from '../../actions/plant.actions';

@Component({
  selector: 'app-plant-entities',
  templateUrl: './plant-entities.component.html'
})
export class PlantEntitiesComponent implements OnInit {

  plantType: Observable<PlantType>;

  data: Observable<any[]>;

  isLoading: Observable<boolean>;

  pagination: Observable<PaginationInterface>;

  constructor(private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.plantType = this.store.pipe(select(selectPlantType));
    this.data = this.store.pipe(select(selectPlantEntities));
    this.isLoading = this.store.pipe(select(selectPlatLoading));
    this.pagination = this.store.pipe(select(selectPlantPagination));
  }

  onPageChange(change: PageEvent) {
    this.store.dispatch(loadPlantPagination({pagination: change}));
  }
}
