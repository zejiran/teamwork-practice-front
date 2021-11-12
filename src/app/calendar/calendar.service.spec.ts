/* tslint:disable:no-unused-variable */

import { getTestBed, TestBed } from '@angular/core/testing';
import { CalendarService } from './calendar.service';

import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';

import { Calendar } from './calendar';
import { environment } from '../../environments/environment';
import * as faker from 'faker';

describe('Service: Calendar', () => {
  let injector: TestBed;
  let service: CalendarService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'calendars';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CalendarService],
    });
    injector = getTestBed();
    service = injector.get(CalendarService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: Calendar[] = [];

    for (let i = 1; i < 11; i++) {
      const calendar = new Calendar(faker.datatype.number());

      mockPosts.push(calendar);
    }

    service.getCalendars().subscribe((calendars) => {
      expect(calendars.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
