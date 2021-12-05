/* tslint:disable:no-unused-variable */

import { getTestBed, TestBed } from '@angular/core/testing';
import { LocationService } from './location.service';

import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';

import * as faker from 'faker';
import { Locationn } from './locationn';
import { environment } from '../../environments/environment';
import { Route } from '../route/route';

describe('Service: Location', () => {
  let injector: TestBed;
  let service: LocationService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'locations';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationService],
    });
    injector = getTestBed();
    service = injector.get(LocationService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: Locationn[] = [];

    for (let i = 1; i < 11; i++) {
      const location = new Locationn(
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        new Route(
          faker.datatype.number(),
          faker.datatype.string(),
          faker.datatype.number(2),
          faker.datatype.number(),
        )
      );

      mockPosts.push(location);
    }

    service.getLocations().subscribe((locations) => {
      expect(locations.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
