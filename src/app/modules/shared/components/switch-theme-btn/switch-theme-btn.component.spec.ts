import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchThemeBtnComponent } from './switch-theme-btn.component';

describe('SwitchThemeBtnComponent', () => {
  let component: SwitchThemeBtnComponent;
  let fixture: ComponentFixture<SwitchThemeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchThemeBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchThemeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
