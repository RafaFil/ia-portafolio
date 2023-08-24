import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteUnderConstructionComponent } from './site-under-construction.component';

describe('SiteUnderConstructionComponent', () => {
  let component: SiteUnderConstructionComponent;
  let fixture: ComponentFixture<SiteUnderConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteUnderConstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteUnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
