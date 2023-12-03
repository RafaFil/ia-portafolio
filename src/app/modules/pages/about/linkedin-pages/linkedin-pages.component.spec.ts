import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinPagesComponent } from './linkedin-pages.component';

describe('LinkedinPagesComponent', () => {
  let component: LinkedinPagesComponent;
  let fixture: ComponentFixture<LinkedinPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
