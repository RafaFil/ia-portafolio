import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkdComponent } from './ckd.component';

describe('CkdComponent', () => {
  let component: CkdComponent;
  let fixture: ComponentFixture<CkdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CkdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CkdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
