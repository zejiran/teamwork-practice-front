import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommentListarComponent } from './comment-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Comment } from '../comment';
import * as faker from 'faker';


describe('CommentListarComponent', () => {
  let component: CommentListarComponent;
  let fixture: ComponentFixture<CommentListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListarComponent);
    component = fixture.componentInstance;
    component.comments = [
      new Comment(
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
      )
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a text element ', () => {
    expect(debug.query(By.css('#t')).nativeElement.innerText).toContain(
      component.comments[0].text
    );
    expect(debug.query(By.css('#l')).nativeElement.innerText).toContain(
      component.comments[0].likes
    );
    expect(debug.query(By.css('#dl')).nativeElement.innerText).toContain(
      component.comments[0].dislikes
    );
  });
});
