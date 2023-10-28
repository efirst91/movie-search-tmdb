import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: ':language',
    children: [
      {
        path: 'search',
        loadChildren: () => import('@modules/search/search.component').then(m => m.SearchComponent)
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: "full"
      }
    ]
  },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseLangRoutingModule {
}
