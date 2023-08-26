import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleImageComponent } from './article-image.component';

describe('ArticleImageComponent', () => {
  let component: ArticleImageComponent;
  let fixture: ComponentFixture<ArticleImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
