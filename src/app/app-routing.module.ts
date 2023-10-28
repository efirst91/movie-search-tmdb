import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseLangComponent} from "./modules/base-lang/base-lang.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'es/home',
    pathMatch: "full"
  },
  {
    path: '',
    component: BaseLangComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
