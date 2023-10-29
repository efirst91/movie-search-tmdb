import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from "@shared/components/not-found/not-found.component";
import {SearchComponent} from "@modules/search/search.component";
import {authGuard} from "@core/guards/auth.guard";

const routes: Routes = [
  {
    path: 'search',
    canActivate: [authGuard],
    component: SearchComponent
  },
  {
    path: 'token-acceso',
    loadComponent: () => import('@modules/token-admin/token-admin.component').then(c => c.TokenAdminComponent)
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
