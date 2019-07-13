import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { PlantEntityTableComponent } from './plant-entity-table.component';

@NgModule({
  declarations: [
    PlantEntityTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    PlantEntityTableComponent
  ]
})
export class PlantEntityTableModule {
}
