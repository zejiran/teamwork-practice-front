import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReviewListarComponent } from './review-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Review } from '../review';
import * as faker from 'faker';
import { Comment } from '../../comment/comment';
import { Route } from 'src/app/route/route';


describe('ReviewListarComponent', () => {
  let component: ReviewListarComponent;
  let fixture: ComponentFixture<ReviewListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewListarComponent);
    component = fixture.componentInstance;
    component.reviews = [
      new Review(faker.datatype.number(),
        new Comment(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.datatype.number(),
        ),
        faker.datatype.number(),
        new Route(
          faker.datatype.number(),
          faker.datatype.string(),
          faker.datatype.number(2),
          faker.datatype.number()
        )
      )
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have an td element ', () => {
    expect(debug.query(By.css('td')).nativeElement.innerText).toContain(
      component.reviews[0].comment.text
    );

  });
});
