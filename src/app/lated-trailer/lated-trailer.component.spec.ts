import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatedTrailerComponent } from './lated-trailer.component';

describe('LatedTrailerComponent', () => {
  let component: LatedTrailerComponent;
  let fixture: ComponentFixture<LatedTrailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatedTrailerComponent]
    });
    fixture = TestBed.createComponent(LatedTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
