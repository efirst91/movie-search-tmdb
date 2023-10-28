import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@modules/main/app-routing.module';
import { AppComponent } from '@modules/main/app.component';
import {BaseLangComponent} from "@modules//base-lang/base-lang.component";
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from '../../config/i18n/transloco-root.module';
import {API_URL} from "@shared/custom-tokens/custom-app-tokens";
import {environment} from "@env/environment";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseLangComponent,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [
    {
      provide: API_URL,
      useValue: environment.apiUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
