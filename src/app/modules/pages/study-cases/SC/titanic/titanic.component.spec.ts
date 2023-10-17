import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitanicComponent } from './titanic.component';

describe('TitanicComponent', () => {
  let component: TitanicComponent;
  let fixture: ComponentFixture<TitanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitanicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
