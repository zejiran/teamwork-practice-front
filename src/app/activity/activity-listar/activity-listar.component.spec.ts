/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActivityListarComponent } from './activity-listar.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import * as faker from 'faker';
import {Activity} from '../activity';

describe('ActivityListarComponent', () => {
  let component: ActivityListarComponent;
  let fixture: ComponentFixture<ActivityListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListarComponent);
    component = fixture.componentInstance;
    component.activities = [
      new Activity(

        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.date.past(),
        faker.datatype.number()

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
      component.activities[0].name
    );

  });
});
