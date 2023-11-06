import {Component, inject, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";

import {Observable, Subject, takeUntil} from "rxjs";

import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

import {TranslocoModule} from "@ngneat/transloco";

import {select, Store} from "@ngrx/store";

import {MovieInterface} from "@shared/models/movie.interface";
import {GlobalState} from "@shared/store/global.state";
import * as selectors from "@shared/store/global.selector"
import {IMAGE_BASE_URL} from "@shared/custom-tokens/custom-app-tokens";
import {LANGUAGES} from "@shared/enums/app";

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, TranslocoModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnDestroy {
  storeMovieDetail$!: Observable<MovieInterface>;
  details?: MovieInterface;
  imageBaseUrl = inject(IMAGE_BASE_URL);
  url = `${this.imageBaseUrl}/original`;
  subjectDestroy$ = new Subject<void>();
  LANGUAGE: typeof LANGUAGES = LANGUAGES;

  constructor(
    private store: Store<GlobalState>,
    private router: Router
  ) {
    this.storeMovieDetail$ = this.store.pipe(select(selectors.selectMovieDetail));
    this.storeMovieDetail$
      .pipe(
        takeUntil(this.subjectDestroy$)
      )
      .subscribe({
        next: value => this.details = value
      })
  }

  onBackToSearch(): void {
    this.router.navigate(['/search']).then();
  }

  ngOnDestroy(): void {
    this.subjectDestroy$.next();
    this.subjectDestroy$.complete();
  }
}
