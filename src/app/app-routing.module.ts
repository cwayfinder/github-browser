import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingComponent } from './pages/trending/trending.component';
import { SavedComponent } from './pages/saved/saved.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  { path: 'trending', component: TrendingComponent },
  { path: 'saved', component: SavedComponent },
  { path: 'detail/:index', component: DetailComponent },

  { path: '**', redirectTo: '/trending', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
