import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { ReviewListarComponent } from './review-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as faker from 'faker';
import { Comment } from '../../comment/comment';
import { Route } from 'src/app/route/route';
import {ReviewDetail} from '../reviewDetail';
import {FilesContainer} from '../../FilesContainer/filesContainer';


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
      new ReviewDetail(faker.datatype.number() ,
        new Comment(faker.datatype.number(), faker.lorem.sentence(), faker.datatype.number(), faker.datatype.number()),
        faker.datatype.number(),
        new Route(faker.datatype.number(), faker.datatype.string(), faker.datatype.number(2),
          faker.datatype.number()),
        new FilesContainer()
      )
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
