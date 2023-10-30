import {MovieDetailsInitialState, SearchInitialState} from "@shared/store/global.model.interface";
import {ActionReducerMap} from "@ngrx/store";
import * as reducer from "@shared/store/global.reducer";

export interface GlobalState {
  search: SearchInitialState
  selectionDetails: MovieDetailsInitialState;
}

export const ROOT_REDUCERS: ActionReducerMap<GlobalState> = {
  search: reducer.searchReducer,
  selectionDetails: reducer.movieDetailReducer

}
