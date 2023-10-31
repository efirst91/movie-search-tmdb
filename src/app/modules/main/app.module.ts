import {APP_INITIALIZER, ErrorHandler, isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from "@angular/common";

import {TranslocoService} from "@ngneat/transloco";

import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

import {IMAGE_BASE_URL, PROXY_BASE_URL} from "@shared/custom-tokens/custom-app-tokens";
import {environment} from "@env/environment";
import {AppRoutingModule} from '@modules/main/app-routing.module';
import {AppComponent} from '@modules/main/app.component';
import {TranslocoRootModule} from '@config/i18n/transloco-root.module';
import {NotFoundComponent} from "@shared/components/not-found/not-found.component";
import {SearchComponent} from "@modules/search/search.component";
import {TokenAdminComponent} from "@modules/token-admin/token-admin.component";
import {LocalStorageService} from "@shared/services/local-storage/local-storage.service";
import {HeaderInterceptor} from "@core/interceptors/header/header.interceptor";
import {ToolBarComponent} from "@shared/components/tool-bar/tool-bar.component";
import {LANGUAGES} from "@shared/enums/app";
import {ROOT_REDUCERS} from "@shared/store/global.state";
import {GlobalEffects} from "@shared/store/global.effect.service";
import {GlobalHandlerService} from "@core/error/global-handler.service";
import {HttpErrorInterceptorInterceptor} from "@core/interceptors/error/http-error-interceptor.interceptor";


export const getBaseHref = (tLocoService: TranslocoService, lStorageService: LocalStorageService) => {
  return lStorageService.getActiveLang() ?? tLocoService.getDefaultLang();
};

export function initializeApp(tLService: TranslocoService, lStorageService: LocalStorageService) {
  const langExist = lStorageService.getActiveLang();
  tLService.setActiveLang(langExist ?? LANGUAGES.EN);
  return () => true;
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NotFoundComponent,
    SearchComponent,
    MatSnackBarModule,
    ToolBarComponent,

    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([GlobalEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),

    TranslocoRootModule,
    TokenAdminComponent
  ],
  providers:[
    {
      provide: PROXY_BASE_URL,
      useValue: environment.proxyApiBase
    },
    {
      provide: IMAGE_BASE_URL,
      useValue: environment.imageBaseUrl
    },
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseHref,
      deps: [TranslocoService, LocalStorageService],
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {duration: 2500}
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [TranslocoService, LocalStorageService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
