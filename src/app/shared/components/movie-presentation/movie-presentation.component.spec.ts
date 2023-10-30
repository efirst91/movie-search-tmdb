import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TranslocoModule} from "@ngneat/transloco";
import {MatCardModule} from "@angular/material/card";
import {CommonModule, NgOptimizedImage} from "@angular/common";

import { MoviePresentationComponent } from './movie-presentation.component';

xdescribe('MoviePresentationComponent', () => {
  let component: MoviePresentationComponent;
  let fixture: ComponentFixture<MoviePresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule,MoviePresentationComponent,TranslocoModule,NgOptimizedImage,MatCardModule]
    });
    fixture = TestBed.createComponent(MoviePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
