import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlantEntitiesComponent } from './plant-entities.component';

import { EntranceTableModule } from '../../components/entrance-table/entrance-table.module';

import { PlantService } from '../../services/plant.service';

@NgModule({
  declarations: [
    PlantEntitiesComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: PlantEntitiesComponent}]),
    EntranceTableModule
  ],
  exports: [
    PlantEntitiesComponent
  ],
  providers: [
    PlantService
  ]
})
export class PlantEntitiesModule {
}
