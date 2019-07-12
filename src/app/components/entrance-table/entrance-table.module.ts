import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { EntranceTableComponent } from './entrance-table.component';

@NgModule({
  declarations: [
    EntranceTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    EntranceTableComponent
  ]
})
export class EntranceTableModule {
}
