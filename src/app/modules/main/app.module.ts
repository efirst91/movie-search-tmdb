import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@modules/main/app-routing.module';
import { AppComponent } from '@modules/main/app.component';
import {BaseLangComponent} from "@modules//base-lang/base-lang.component";
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from '../../config/i18n/transloco-root.module';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
