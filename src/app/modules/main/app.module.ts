import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@modules/main/app-routing.module';
import { AppComponent } from '@modules/main/app.component';
import {BaseLangComponent} from "@modules//base-lang/base-lang.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseLangComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
