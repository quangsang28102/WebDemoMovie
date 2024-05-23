import { TestBed } from '@angular/core/testing';

import { DetailInforService } from './detail-infor.service';

describe('DetailInforService', () => {
  let service: DetailInforService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailInforService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
