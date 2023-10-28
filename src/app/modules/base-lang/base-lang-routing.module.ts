import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: ':language',
    children: [
      {
        path: 'home',
        loadChildren: () => import('../movie/movie.module').then(m => m.MovieModule)
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
