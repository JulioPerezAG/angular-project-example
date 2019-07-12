import { NgModule } from '@angular/core';
import { LocationComponent } from './location.component';
import { MapModule } from '../../components/map/map.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: LocationComponent}]),
    MapModule
  ],
  exports: [
    LocationComponent
  ]
})
export class LocationModule {
}
