import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRightCardComponent } from './movie-right-card.component';

describe('MovieRightCardComponent', () => {
  let component: MovieRightCardComponent;
  let fixture: ComponentFixture<MovieRightCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieRightCardComponent]
    });
    fixture = TestBed.createComponent(MovieRightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
