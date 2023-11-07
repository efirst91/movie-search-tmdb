import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { SearchInitialState } from '@shared/store/global.model.interface';
import * as selectors from '@shared/store/global.selector';
import * as action from '@shared/store/global.actions';
import { GlobalState } from '@shared/store/global.state';
import { MovieInterface } from '@shared/models/movie.interface';
import { SearchInterface } from '@shared/models/search.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchStoreService {
  storeSearchData$!: Observable<SearchInitialState>;
  storeMovieDetail$!: Observable<MovieInterface>;

  constructor(private store: Store<GlobalState>) {
    this.storeSearchData$ = this.store.pipe(select(selectors.selectData));
    this.storeMovieDetail$ = this.store.pipe(
      select(selectors.selectMovieDetail),
    );
  }

  setMovieDetails(movie: MovieInterface): void {
    this.store.dispatch(action.movieDetail({ movie }));
  }

  search(search: SearchInterface): void {
    this.store.dispatch(action.search({ search }));
  }
}
