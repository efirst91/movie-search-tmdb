import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenAdminComponent } from './token-admin.component';

xdescribe('TokenAdminComponent', () => {
  let component: TokenAdminComponent;
  let fixture: ComponentFixture<TokenAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TokenAdminComponent]
    });
    fixture = TestBed.createComponent(TokenAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
