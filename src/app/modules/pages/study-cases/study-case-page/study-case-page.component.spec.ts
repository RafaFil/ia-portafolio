import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyCasePageComponent } from './study-case-page.component';

describe('StudyCasePageComponent', () => {
  let component: StudyCasePageComponent;
  let fixture: ComponentFixture<StudyCasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyCasePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyCasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
