import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRightComponent } from './menu-right.component';

describe('MenuRightComponent', () => {
  let component: MenuRightComponent;
  let fixture: ComponentFixture<MenuRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuRightComponent]
    });
    fixture = TestBed.createComponent(MenuRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
