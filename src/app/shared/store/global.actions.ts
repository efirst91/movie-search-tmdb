import {createAction, props} from "@ngrx/store";
import {SearchInterface} from "@shared/models/search.interface";
import {ResultInterface} from "@shared/models/result.interface";
import {MovieInterface} from "@shared/models/movie.interface";

// search section
export const search = createAction(
  '[Search] Search movies',
  props<{search: SearchInterface}>()
)

export const searchSuccess = createAction(
  '[Search] Search success',
  props<{ criteria: SearchInterface, data: ResultInterface<MovieInterface> }>()
)

export const searchFail = createAction(
  `[Search] Search fails`,
  props<{ message: string }>()
)

// movie
export const movieDetail = createAction(
  `[Search] Set movie to see detail`,
  props<{ movie: MovieInterface }>()
)

