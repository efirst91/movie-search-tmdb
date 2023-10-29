import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslocoService} from "@ngneat/transloco";

import {LocalStorageService} from "@shared/services/local-storage/local-storage.service";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private tLocoService: TranslocoService,
    private lStorageService: LocalStorageService
  ) {

  }

  ngOnInit() {
  }

  onChange(lang: string) {
    this.tLocoService.setDefaultLang(lang);
    this.lStorageService.setActiveLang(lang);
    location.reload();
  }
}
