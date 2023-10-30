import {GlobalState} from "@shared/store/global.state";
import {createSelector} from "@ngrx/store";
import {MovieDetailsInitialState, SearchInitialState} from "@shared/store/global.model.interface";

export const selectFeatureSearch = (state: GlobalState) => state.search;
export const selectFeatureMovie = (state: GlobalState) => state.selectionDetails;

export const selectData = createSelector(
  selectFeatureSearch,
  (state: SearchInitialState) => state
);

export const selectMovieDetail = createSelector(
  selectFeatureMovie,
  (state: MovieDetailsInitialState) => state.movie
)
