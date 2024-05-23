import { TestBed } from '@angular/core/testing';

import { DataPopularMovieService } from './data-popular-movie.service';

describe('DataPopularMovieService', () => {
  let service: DataPopularMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPopularMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
