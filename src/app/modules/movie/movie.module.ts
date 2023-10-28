import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MovieDetailComponent} from "./components/movie-detail/movie-detail.component";
import {MovieComponent} from "./movie.component";


@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailComponent
  ],
  exports: [
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class MovieModule {
}
