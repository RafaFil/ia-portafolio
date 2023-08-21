import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePrewCardComponent } from './article-prew-card.component';

describe('ArticlePrewCardComponent', () => {
  let component: ArticlePrewCardComponent;
  let fixture: ComponentFixture<ArticlePrewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePrewCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlePrewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
