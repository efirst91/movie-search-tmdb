import { TestBed } from '@angular/core/testing';

import { SnackBarNotificationsService } from './snack-bar-notifications.service';

describe('SnackBarNotificationsService', () => {
  let service: SnackBarNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackBarNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
