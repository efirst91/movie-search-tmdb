import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TokenAdminComponent} from './token-admin.component';
import {LocalStorageService} from "@shared/services/local-storage/local-storage.service";
import {SnackBarNotificationsService} from "@shared/services/snack-bar-notifications/snack-bar-notifications.service";
import {TranslocoModule, TranslocoService} from "@ngneat/transloco";
import {Router} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TranslocoRootModule} from "@config/i18n/transloco-root.module";
import {HttpClientModule} from "@angular/common/http";

describe('TokenAdminComponent', () => {
  let component: TokenAdminComponent;
  let fixture: ComponentFixture<TokenAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
            imports: [
        CommonModule,
        TokenAdminComponent, MatInputModule,
        MatButtonModule, ReactiveFormsModule,
        MatFormFieldModule,
        HttpClientModule,
        FormsModule, MatSnackBarModule, TranslocoModule, TranslocoRootModule],
      providers: [
        LocalStorageService,
        SnackBarNotificationsService,
        Router, TranslocoService, MatSnackBar],

    });
    fixture = TestBed.createComponent(TokenAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should update a token', () => {
    component.tokenControl.setValue('test Value');
    component.onUpdateToken();
    fixture.detectChanges();
    const token = localStorage.getItem('lang');
    expect(token).toBe('test Value');
  })
});
