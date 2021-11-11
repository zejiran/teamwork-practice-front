/* tslint:disable:no-unused-variable */

import {TestBed, async, inject, getTestBed} from '@angular/core/testing';
import { GuideService } from './guide.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';
import * as faker from 'faker';
import {Guide} from './guide';

describe('Service: Guide', () => {
  let injector: TestBed;
  let service: GuideService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'guides';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GuideService],
    });
    injector = getTestBed();
    service = injector.get(GuideService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: Guide[] = [];

    for (let i = 1; i < 11; i++) {
      const guide = new Guide(
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
      );

      mockPosts.push(guide);
    }

    service.getGuides().subscribe((admins) => {
      expect(admins.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
