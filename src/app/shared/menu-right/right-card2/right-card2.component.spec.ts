import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCard2Component } from './right-card2.component';

describe('RightCard2Component', () => {
  let component: RightCard2Component;
  let fixture: ComponentFixture<RightCard2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightCard2Component]
    });
    fixture = TestBed.createComponent(RightCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
