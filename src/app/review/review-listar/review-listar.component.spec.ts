import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReviewListarComponent } from './review-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Review } from '../review';
import * as faker from 'faker';
import { Comment } from '../../comment/comment';
import { Route } from 'src/app/route/route';
import { Outing } from 'src/app/outing/outing';


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
      new Review(
        new Comment(
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.datatype.number(),
        ),
        faker.datatype.number(),
        new Route(
          faker.lorem.sentence(),
          faker.datatype.number(),
          new Outing(
            faker.lorem.sentence(),
            faker.datatype.datetime(),
            faker.lorem.sentence(),
            faker.datatype.number()
          ),
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
