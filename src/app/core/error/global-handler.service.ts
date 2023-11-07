import { ErrorHandler, inject, Injectable, NgZone } from '@angular/core';

import { TranslocoService } from '@ngneat/transloco';
import { SnackBarNotificationsService } from '@shared/services/snack-bar-notifications/snack-bar-notifications.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalHandlerService implements ErrorHandler {
  readonly zone = inject(NgZone);
  snackNotification = inject(SnackBarNotificationsService);
  tlService = inject(TranslocoService);

  handleError(error: unknown): void {
    this.zone.run(() => {
      this.snackNotification.openSnackBar(
        this.tlService.translate(
          'An unexpected error has occurred, please contact with your support team',
        ),
        this.tlService.translate('Close'),
        2000,
      );
    });
    console.warn('Error detail ->', error);
  }
}
