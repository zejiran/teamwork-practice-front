/* tslint:disable:no-unused-variable */

import {TestBed, async, inject, getTestBed} from '@angular/core/testing';
import { ActivityService } from './activity.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';
import * as faker from 'faker';
import {Activity} from './activity';

describe('Service: Activity', () => {
  let injector: TestBed;
  let service: ActivityService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'activities';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActivityService],
    });
    injector = getTestBed();
    service = injector.get(ActivityService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: Activity[] = [];

    for (let i = 1; i < 11; i++) {
      const activity = new Activity(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.date.past(),
        faker.datatype.number()
      );

      mockPosts.push(activity);
    }

    service.getActivities().subscribe((activities) => {
      expect(activities.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
