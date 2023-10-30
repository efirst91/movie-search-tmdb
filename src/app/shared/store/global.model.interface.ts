import {SearchInterface} from "@shared/models/search.interface";
import {ResultInterface} from "@shared/models/result.interface";
import {MovieInterface} from "@shared/models/movie.interface";

export interface SearchInitialState {
  searchCriteria: SearchInterface;
  data: ResultInterface<MovieInterface> | null;
  loading: boolean;
  message: string | null;
}

export interface MovieDetailsInitialState {
  movie: MovieInterface
}
