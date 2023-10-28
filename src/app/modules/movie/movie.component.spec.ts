import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieComponent} from './movie.component';
import {MovieDetailComponent} from "./components/movie-detail/movie-detail.component";

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieComponent, MovieDetailComponent]
    });
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
