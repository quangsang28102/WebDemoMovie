import { TestBed } from '@angular/core/testing';
import { TopRatedService } from './top-rated-data.service';



describe('TopRatedDataService', () => {
  let service: TopRatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopRatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
