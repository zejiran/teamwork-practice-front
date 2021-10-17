/* tslint:disable:no-unused-variable */

import { getTestBed, TestBed } from '@angular/core/testing';
import { LocationService } from './route.service';

import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';

import * as faker from 'faker';
import { Route } from './route';
import { environment } from '../../environments/environment';

describe('Service: Location', () => {
  let injector: TestBed;
  let service: LocationService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'routes';

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
    const mockPosts: Route[] = [];

    for (let i = 1; i < 11; i++) {
      const route = new Route(
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number()
      );

      mockPosts.push(route);
    }

    service.getLocations().subscribe((routes) => {
      expect(routes.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
