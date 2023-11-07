import { inject, Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarNotificationsService {
  readonly snackBar = inject(MatSnackBar);

  /**
   * Message notification
   * @param message message text
   * @param action action
   * @param duration message duration
   * @param vP Vertical position can be top or bottom
   * @param hP Horizontal position can be 'start' | 'center' | 'end' | 'left' | 'right'
   * @example close
   */
  openSnackBar(
    message: string = '',
    action: string = 'close',
    duration = 5000,
    vP: MatSnackBarVerticalPosition = 'top',
    hP: MatSnackBarHorizontalPosition = 'right',
  ) {
    const newConfig = new MatSnackBarConfig();
    newConfig.duration = duration;
    newConfig.verticalPosition = vP;
    newConfig.horizontalPosition = hP;
    this.snackBar.open(message, action, newConfig);
  }
}
