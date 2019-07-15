import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { metaReducers, reducers } from './reducers';

import { LoginEffects } from './effects/login.effects';
import { PlantEffects } from './effects/plant.effects';

import { AuthService } from './services/auth.service';
import { PlantService } from './services/plant.service';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { TerrainEffects } from './effects/terrains.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([LoginEffects, PlantEffects, TerrainEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    HttpClientModule
  ],
  providers: [
    AuthService,
    PlantService,
    {multi: true, useClass: AuthInterceptor, provide: HTTP_INTERCEPTORS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
