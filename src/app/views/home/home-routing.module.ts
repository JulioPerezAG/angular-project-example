import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'entrance'},
      {path: 'location', loadChildren: () => import('../location/location.module').then(module => module.LocationModule)},
      {path: ':plantType', loadChildren: () => import('../plant-entities/plant-entities.module').then(module => module.PlantEntitiesModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
