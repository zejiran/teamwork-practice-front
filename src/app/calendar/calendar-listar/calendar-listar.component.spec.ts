/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Calendar } from '../calendar';
import { CalendarListarComponent } from './calendar-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as faker from 'faker';

describe('CalendarListarComponent', () => {
  let component: CalendarListarComponent;
  let fixture: ComponentFixture<CalendarListarComponent>;

  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarListarComponent);
    component = fixture.componentInstance;
    component.calendars = [
      new Calendar(faker.datatype.number()),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });
});
