import {Component, NgZone} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

import {TranslocoModule, TranslocoService} from "@ngneat/transloco";

import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

import {LocalStorageService} from "@shared/services/local-storage/local-storage.service";
import {SnackBarNotificationsService} from "@shared/services/snack-bar-notifications/snack-bar-notifications.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-token-admin',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule, FormsModule, TranslocoModule],
  templateUrl: './token-admin.component.html',
  styleUrls: ['./token-admin.component.scss']
})
export class TokenAdminComponent {

  tokenControl: FormControl;

  constructor(
    private lStorageService: LocalStorageService,
    private notification: SnackBarNotificationsService,
    private tlService: TranslocoService,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.tokenControl = new FormControl<string | null>(null, [Validators.required]);
  }

  onUpdateToken(): void {
    console.log('value form -> ', this.tokenControl.value)
    const token = this.tokenControl.value.trim()
    this.lStorageService.setToken(token);
    this.notification.openSnackBar(this.tlService.translate('Token updated!!'), this.tlService.translate('Close'));
    this.ngZone.run(() => {
      this.router.navigate(['/search']).then();
    })
  }
}
