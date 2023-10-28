import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BaseLangRoutingModule} from "./base-lang-routing.module";


@Component({
  standalone:true,
  imports:[RouterModule,BaseLangRoutingModule],
  template: `<router-outlet></router-outlet>`,
})
export class BaseLangComponent {

}
