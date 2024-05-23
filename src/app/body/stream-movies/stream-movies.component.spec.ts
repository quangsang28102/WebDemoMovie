import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamMoviesComponent } from './stream-movies.component';

describe('StreamMoviesComponent', () => {
  let component: StreamMoviesComponent;
  let fixture: ComponentFixture<StreamMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StreamMoviesComponent]
    });
    fixture = TestBed.createComponent(StreamMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
