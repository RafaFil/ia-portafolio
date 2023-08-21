import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyCaseCarrouselComponent } from './study-case-carrousel.component';

describe('StudyCaseCarrouselComponent', () => {
  let component: StudyCaseCarrouselComponent;
  let fixture: ComponentFixture<StudyCaseCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyCaseCarrouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyCaseCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
