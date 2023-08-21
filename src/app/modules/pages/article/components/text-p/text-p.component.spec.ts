import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPComponent } from './text-p.component';

describe('TextPComponent', () => {
  let component: TextPComponent;
  let fixture: ComponentFixture<TextPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
