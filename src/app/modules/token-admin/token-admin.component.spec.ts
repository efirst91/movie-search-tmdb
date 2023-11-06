import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgZone} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

import { TranslocoService} from "@ngneat/transloco";

import {TokenAdminComponent} from './token-admin.component';
import {TranslocoRootModule} from "@config/i18n/transloco-root.module";
import {LocalStorageService} from "@shared/services/local-storage/local-storage.service";
import {SnackBarNotificationsService} from "@shared/services/snack-bar-notifications/snack-bar-notifications.service";

describe('TokenAdminComponent', () => {
  let component: TokenAdminComponent;
  let fixture: ComponentFixture<TokenAdminComponent>;
  let localStorageService: LocalStorageService;
  let snackBarService: SnackBarNotificationsService;
  let router: Router;
  let ngZone: NgZone;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CommonModule,BrowserAnimationsModule, MatInputModule,
        MatButtonModule, ReactiveFormsModule,
        FormsModule, TranslocoRootModule,
        MatSnackBarModule,
        HttpClientTestingModule
      ],
      providers: [
        TokenAdminComponent,
        TranslocoService,
        LocalStorageService,
        SnackBarNotificationsService,
        MatSnackBar,
        Router,
      ]
    });

    fixture = TestBed.createComponent(TokenAdminComponent);
    component = fixture.componentInstance;
    localStorageService = TestBed.inject(LocalStorageService);
    snackBarService = TestBed.inject(SnackBarNotificationsService);
    router = TestBed.inject(Router);
    ngZone = TestBed.inject(NgZone);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onUpdateToken should update the token', () => {
    const token = 'testToken';
    component.tokenControl = new FormControl(token);

    const setTokenSpy = jest.spyOn(localStorageService, 'setToken').mockReturnValue(undefined);
    const openSnackBarSpy = jest.spyOn(snackBarService, 'openSnackBar').mockReturnValue(undefined);
    const navigateSpy = jest.spyOn(router, 'navigate').mockReturnValue(Promise.resolve(true));

    component.onUpdateToken();

    expect(setTokenSpy).toHaveBeenCalledWith(token);
    expect(openSnackBarSpy).toHaveBeenCalledWith('Token updated!!', 'Close');
    expect(navigateSpy).toHaveBeenCalled();

    setTokenSpy.mockRestore();
    openSnackBarSpy.mockRestore();
    navigateSpy.mockRestore();
  });
});
