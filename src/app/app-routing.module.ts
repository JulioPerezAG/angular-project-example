import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', loadChildren: () => import('./views/login/login.module').then(module => module.LoginModule)},
  {
    path: 'home', loadChildren: () => import('./views/home/home.module').then(module => module.HomeModule), data: {
      requiredRoles: ['INGENIO_ADMIN']
    }, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule {
}
