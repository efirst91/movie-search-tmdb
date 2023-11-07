import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';

import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { SearchInterface } from '@shared/models/search.interface';
import { ResultInterface } from '@shared/models/result.interface';
import { MovieInterface } from '@shared/models/movie.interface';
import { MoviePresentationComponent } from '@shared/components/movie-presentation/movie-presentation.component';
import { SearchStoreService } from '@shared/services/facades/search-store.service';
import { SearchInitialState } from '@shared/store/global.model.interface';
import { LANGUAGES } from '@shared/enums/app';
import { SnackBarNotificationsService } from '@shared/services/snack-bar-notifications/snack-bar-notifications.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TranslocoModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MoviePresentationComponent,
    MatPaginatorModule,
    RouterModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  data!: ResultInterface<MovieInterface>;
  formSearch!: FormGroup;
  showFirstLastButtons = true;
  pageSizeOptions = [20, 30, 40];
  pageSize = 20;
  storeSearchData$!: Observable<SearchInitialState>;
  storeData!: SearchInitialState;
  firstSearch: boolean = false;
  loading: boolean = false;

  constructor(
    private tLocoService: TranslocoService,
    private lStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private storeService: SearchStoreService,
    private notification: SnackBarNotificationsService,
  ) {
    this.formSearch = this.fb.group({
      query: ['', Validators.required],
      year: [new Date().getFullYear()],
    });
  }

  ngOnInit() {
    this.routeChangeSubscription();
    this.initDataStore();
  }

  /**
   * Validate if one of search param exist, if exist then search the result
   * @private
   */
  private routeChangeSubscription(): void {
    this.route.queryParams.subscribe((value) => {
      let search: SearchInterface = {
        page: 1,
        query: '',
        year: new Date().getFullYear(),
      };

      let pageFlag,
        queryFlag,
        yearFlag = false;

      if (value['page']) {
        search.page = value['page'];
        pageFlag = true;
      }

      if (value['query']) {
        search.query = value['query'];
        queryFlag = true;
      }

      if (value['year']) {
        search.year = value['year'];
        yearFlag = true;
      }

      if (pageFlag || queryFlag || yearFlag) {
        this.initFormValue(search.query, search.year);
        this.getMovies(search);
      }
    });
  }

  private initDataStore(): void {
    this.storeSearchData$ = this.storeService.storeSearchData$;
    this.storeSearchData$.subscribe({
      next: (value) => {
        this.storeData = value;

        if (value?.searchCriteria?.year || value?.searchCriteria?.query) {
          this.formSearch.patchValue({
            query: value.searchCriteria.query,
            year: value.searchCriteria.year,
          });

          this.loading = false;
          this.formSearch.updateValueAndValidity();
        }
      },
    });
  }

  private initFormValue(
    query: string = '',
    year: number = new Date().getFullYear(),
  ): void {
    this.formSearch.patchValue({
      query: query,
      year: year,
    });
    this.formSearch.updateValueAndValidity();
  }

  private getMovies(search: SearchInterface): void {
    this.loading = true;
    this.storeService.search(search);
  }

  private updateRoute(search: SearchInterface): void {
    this.router
      .navigate(['/search'], {
        queryParams: {
          page: search.page ?? 1,
          query: search.query ?? '-',
          year: search.year,
        },
      })
      .then();
  }

  onSearch() {
    const search: SearchInterface = {
      page: 1,
      query: this.formSearch.get('query')?.value,
      year: this.formSearch.get('year')?.value,
    };
    this.updateRoute(search);
  }

  handlePageEvent(e: PageEvent): void {
    this.pageSize = e.pageSize;
    let pageIndex = e.pageIndex === 0 ? 1 : e.pageIndex;
    const search: SearchInterface = {
      page: pageIndex,
      query: this.formSearch.get('query')?.value,
      year: this.formSearch.get('year')?.value,
    };

    this.updateRoute(search);
  }

  onResearch(): void {
    const lang =
      this.lStorageService.getActiveLang() ??
      this.tLocoService.getDefaultLang();
    const langDict: { [key: string]: () => void } = {
      es: () => {
        this.lStorageService.setActiveLang(LANGUAGES.EN);
        window.location.reload();
      },
      en: () => {
        this.lStorageService.setActiveLang(LANGUAGES.ES);
        window.location.reload();
      },
    };

    langDict[lang]();
  }

  onSelection(item: MovieInterface): void {
    this.storeService.setMovieDetails(item);
  }
}
