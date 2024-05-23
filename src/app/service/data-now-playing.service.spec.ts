import { TestBed } from '@angular/core/testing';

import { DataNowPlayingService } from './nowPlayingData.service';

describe('DataNowPlayingService', () => {
  let service: DataNowPlayingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataNowPlayingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
