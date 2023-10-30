import {inject, Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackBarNotificationsService {
  readonly snackBar = inject(MatSnackBar);

  /**
   * Message notification
   * @param message message text
   * @param action action
   * @example close
   */
  openSnackBar(message: string ='', action: string = 'close') {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
