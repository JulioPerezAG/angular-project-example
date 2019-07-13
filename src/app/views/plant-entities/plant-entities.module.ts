import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';

import { PlantEntitiesComponent } from './plant-entities.component';

import { PlantEntityTableModule } from '../../components/plant-entity-table/plant-entity-table.module';

import { PlantService } from '../../services/plant.service';

@NgModule({
  declarations: [
    PlantEntitiesComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: PlantEntitiesComponent}]),
    PlantEntityTableModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule
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
