import { TestBed } from '@angular/core/testing';

import { PeoplePopularService } from './people-popular.service';

describe('PeoplePopularService', () => {
  let service: PeoplePopularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeoplePopularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
