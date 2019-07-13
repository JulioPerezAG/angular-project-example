import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppStateInterface } from '../../models/app-state.interface';

@Component({
  selector: 'app-plant-entities',
  templateUrl: './plant-entities.component.html'
})
export class PlantEntitiesComponent {

  constructor(private store: Store<AppStateInterface>) {
  }
}
