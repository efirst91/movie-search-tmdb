import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from "@angular/common";

import {TranslocoService} from "@ngneat/transloco";

import {API_URL} from "@shared/custom-tokens/custom-app-tokens";
import {environment} from "@env/environment";
import {AppRoutingModule} from '@modules/main/app-routing.module';
import {AppComponent} from '@modules/main/app.component';
import {TranslocoRootModule} from '@config/i18n/transloco-root.module';
import {NotFoundComponent} from "@shared/components/not-found/not-found.component";
import {SearchComponent} from "@modules/search/search.component";
import {TokenAdminComponent} from "@modules/token-admin/token-admin.component";
import {LocalStorageService} from "@shared/services/local-storage/local-storage.service";


export const getBaseHref = (tLocoService: TranslocoService, lStorageService:LocalStorageService) => {
  return lStorageService.getActiveLang() || tLocoService.getActiveLang();
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NotFoundComponent,
    SearchComponent,

    TranslocoRootModule,
    TokenAdminComponent
  ],
  providers: [
    {
      provide: API_URL,
      useValue: environment.apiUrl
    },
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseHref,
      deps: [TranslocoService, LocalStorageService],
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
