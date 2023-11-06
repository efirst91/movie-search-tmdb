import {TestBed, waitForAsync} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {TranslocoRootModule} from "@config/i18n/transloco-root.module";
import {NotFoundComponent} from "@shared/components/not-found/not-found.component";
import {SearchComponent} from "@modules/search/search.component";
import {TokenAdminComponent} from "@modules/token-admin/token-admin.component";
import {APP_BASE_HREF} from "@angular/common";
import {getBaseHref, initializeApp} from "@modules/main/app.module";
import {TranslocoModule, TranslocoService} from "@ngneat/transloco";
import {LocalStorageService} from "@shared/services/local-storage/local-storage.service";
import {APP_INITIALIZER, ErrorHandler} from "@angular/core";
import {HeaderInterceptor} from "@core/interceptors/header/header.interceptor";
import {HttpErrorInterceptorInterceptor} from "@core/interceptors/error/http-error-interceptor.interceptor";
import {GlobalHandlerService} from "@core/error/global-handler.service";
import {IMAGE_BASE_URL, PROXY_BASE_URL} from "@shared/custom-tokens/custom-app-tokens";
import {environment} from "@env/environment";
import {ToolBarComponent} from "@shared/components/tool-bar/tool-bar.component";

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientModule,
        NotFoundComponent,
        ToolBarComponent,
        SearchComponent,
        TokenAdminComponent,
        MatSnackBarModule,
        TranslocoModule,
        TranslocoRootModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: APP_BASE_HREF,
          useFactory: getBaseHref,
          deps: [TranslocoService, LocalStorageService],
        },
        {
          provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
          useValue: {duration: 2500},
        },
        {
          provide: APP_INITIALIZER,
          useFactory: initializeApp,
          deps: [TranslocoService, LocalStorageService],
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HeaderInterceptor,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptorInterceptor,
          multi: true,
        },
        {
          provide: ErrorHandler,
          useClass: GlobalHandlerService,
        },
        {
          provide: PROXY_BASE_URL,
          useValue: environment.proxyApiBase,
        },
        {
          provide: IMAGE_BASE_URL,
          useValue: environment.imageBaseUrl,
        },
      ]
    })));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'movie-search-tmdb'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('movie-search-tmdb');
  });
});
