import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects';
import { HttpClientModule } from '@angular/common/http';
import { TrendingComponent } from './pages/trending/trending.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SavedComponent } from './pages/saved/saved.component';

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
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
