import {createReducer, on} from "@ngrx/store";
import {MovieDetailsInitialState, SearchInitialState} from "@shared/store/global.model.interface";
import * as actions from "@shared/store/global.actions";

export const initialSearchState: SearchInitialState = {
  loading: false,
  searchCriteria: {
    query: '',
    page: 1,
    year: new Date().getFullYear()
  },
  data: {
    results: [],
    page: 1,
    total_results: 0,
    total_pages: 1
  },
  message: null
}

export const initialMovieDetail: MovieDetailsInitialState = {
  movie: {
    vote_average: 0,
    release_date: new Date(),
    title: '',
    poster_path: '',
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    original_language: '',
    original_title: '',
    overview: '',
    video: false,
    popularity: 0,
    vote_count: 0,
    id: 0
  }
}

export const searchReducer = createReducer(
  initialSearchState,
  on(
    actions.search, (state) => {
      return {...state, loading: true}
    }
  ),
  on(
    actions.searchSuccess, (state, {criteria, data}) => {
      return {
        ...state,
        loading: false,
        searchCriteria: criteria,
        data: data
      }
    }
  ),
  on(
    actions.searchFail, (state, {message}) => {
      return {
        ...state,
        loading: false,
        message: message
      }
    }
  )
)

export const movieDetailReducer = createReducer(
  initialMovieDetail,
  on(
    actions.movieDetail, (state, {movie}) => {
      return {
        ...state,
        movie: movie
      }
    }
  )
)
