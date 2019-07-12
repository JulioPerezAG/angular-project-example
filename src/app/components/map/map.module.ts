import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatSelectModule } from '@angular/material';
import { MapService } from '../../services/map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCyG12N29hALRgezrk4bGq4cPQNOVqzdvQ'
    }),
    SweetAlert2Module.forRoot(),
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MapComponent
  ],
  providers: [
    MapService
  ]
})
export class MapModule {
}
