import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutToolbarComponent } from './about-toolbar.component';

describe('AboutToolbarComponent', () => {
  let component: AboutToolbarComponent;
  let fixture: ComponentFixture<AboutToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
