import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { AppState, repoReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects';
import { HttpClientModule } from '@angular/common/http';
import { TrendingComponent } from './pages/trending/trending.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SavedComponent } from './pages/saved/saved.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    DetailComponent,
    SavedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AppRoutingModule,
  ],
  providers: [
    { provide: REDUCER_TOKEN, useValue: { repos: repoReducers } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
