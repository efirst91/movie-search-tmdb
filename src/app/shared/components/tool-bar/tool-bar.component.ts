import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LANGUAGES } from '@shared/enums/app';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    NgOptimizedImage,
    TranslocoModule,
  ],
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent {
  activeLang: string;
  LANGUAGES: typeof LANGUAGES = LANGUAGES;
  menuExpand = false;

  constructor(
    private tlService: TranslocoService,
    private lStorageService: LocalStorageService,
    private router: Router
  ) {
    this.activeLang = this.tlService.getActiveLang();
  }

  onSelect(): void {
    this.menuExpand = !this.menuExpand;
  }

  onChangeLanguage(lang: string): void {
    this.tlService.setActiveLang(lang);
    this.lStorageService.setActiveLang(lang);
    location.reload();
  }

  onRefreshToken(): void {
    this.router.navigate(['/token-acceso']).then();
  }

  onHome(): void {
    this.router.navigate(['/']).then();
  }
}
