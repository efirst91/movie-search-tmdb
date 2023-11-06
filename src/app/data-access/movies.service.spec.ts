import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';

xdescribe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
