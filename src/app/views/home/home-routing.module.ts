import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'entrance'},
      {path: 'entrance', loadChildren: () => import('../entrance/entrance.module').then(module => module.EntranceModule)},
      {path: 'location', loadChildren: () => import('../location/location.module').then(module => module.LocationModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
