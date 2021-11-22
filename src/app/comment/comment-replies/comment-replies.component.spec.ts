import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentRepliesComponent } from './comment-replies.component';

describe('CommentRepliesComponent', () => {
  let component: CommentRepliesComponent;
  let fixture: ComponentFixture<CommentRepliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentRepliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
