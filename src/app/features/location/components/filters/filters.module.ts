import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';

import { FiltersComponent } from './filters.component';

@NgModule({
  declarations: [
    FiltersComponent
  ],
  imports: [
    FlexModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    CommonModule
  ],
  exports: [
    FiltersComponent
  ]
})
export class FiltersModule {
}
