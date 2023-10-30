import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {MoviesService} from "@data-access/movies.service";
import {map, mergeMap} from "rxjs/operators";

import * as actions from "./global.actions"

@Injectable({
  providedIn: 'root'
})
export class GlobalEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(actions.search),
    mergeMap((action) => this.moviesService.getData(action.search)
      .pipe(
        map(response => actions.searchSuccess({criteria: action.search, data: response}),
        )
      )
    )))

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService,
  ) {
  }
}
