import {NgModule} from '@angular/core';
import {MovieDetailComponent} from "@modules/movie/components/movie-detail/movie-detail.component";
import {MovieComponent} from "@modules/movie/movie.component";


@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailComponent
  ],
  exports: [
    MovieComponent,
    MovieDetailComponent
  ],
  imports: [

  ],
  providers: [],
})
export class MovieModule {
}
