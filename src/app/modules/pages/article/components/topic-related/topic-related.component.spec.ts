import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicRelatedComponent } from './topic-related.component';

describe('TopicRelatedComponent', () => {
  let component: TopicRelatedComponent;
  let fixture: ComponentFixture<TopicRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicRelatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
