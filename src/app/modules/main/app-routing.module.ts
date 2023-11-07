import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from '@modules/search/search.component';
import { authGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'search',
    canActivate: [authGuard],
    component: SearchComponent,
  },
  {
    path: 'token-acceso',
    loadComponent: () =>
      import('@modules/token-admin/token-admin.component').then(
        c => c.TokenAdminComponent
      ),
  },
  {
    path: 'pelicula/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@modules/movie-details/movie-details.component').then(
        c => c.MovieDetailsComponent
      ),
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/search',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
