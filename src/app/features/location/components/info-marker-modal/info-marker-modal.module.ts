import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { InfoMarkerModalComponent } from './info-marker-modal.component';

@NgModule({
  declarations: [
    InfoMarkerModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    InfoMarkerModalComponent
  ]
})
export class InfoMarkerModalModule {
}
