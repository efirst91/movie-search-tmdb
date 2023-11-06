import { TestBed } from '@angular/core/testing';

import { SnackBarNotificationsService } from './snack-bar-notifications.service';
import {MatSnackBar} from "@angular/material/snack-bar";

xdescribe('SnackBarNotificationsService', () => {
  let service: SnackBarNotificationsService;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackBarNotificationsService],
    });
    service = TestBed.inject(SnackBarNotificationsService);
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open a snack bar with default values', () => {
    const openSpy = spyOn(snackBar, 'open');

    service.openSnackBar();

    expect(openSpy).toHaveBeenCalledWith('', 'close', 5000, 'top', 'right');
  });

});
