/* tslint:disable:no-unused-variable */

import { getTestBed, TestBed } from '@angular/core/testing';
import { RouteService } from './route.service';

import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';

import * as faker from 'faker';
import { Route } from './route';
import { environment } from '../../environments/environment';
import { Outing } from '../outing/outing';

describe('Service: Location', () => {
  let injector: TestBed;
  let service: RouteService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'routes';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RouteService],
    });
    injector = getTestBed();
    service = injector.get(RouteService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: Route[] = [];

    for (let i = 1; i < 11; i++) {
      const route = new Route(
        faker.lorem.sentence(),
        faker.datatype.number(),
        new Outing(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.datatype.datetime(),
          faker.lorem.sentence(),
          faker.datatype.number()
        )
      );

      mockPosts.push(route);
    }

    service.getRoutes().subscribe((routes) => {
      expect(routes.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
