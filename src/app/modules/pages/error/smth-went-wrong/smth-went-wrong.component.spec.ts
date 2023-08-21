import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmthWentWrongComponent } from './smth-went-wrong.component';

describe('SmthWentWrongComponent', () => {
  let component: SmthWentWrongComponent;
  let fixture: ComponentFixture<SmthWentWrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmthWentWrongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmthWentWrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
