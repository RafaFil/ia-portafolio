import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleLandingComponent } from './title-landing.component';

describe('TitleLandingComponent', () => {
  let component: TitleLandingComponent;
  let fixture: ComponentFixture<TitleLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
