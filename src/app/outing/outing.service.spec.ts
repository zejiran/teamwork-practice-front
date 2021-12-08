/* tslint:disable:no-unused-variable */

import { getTestBed, TestBed } from '@angular/core/testing';
import { OutingService } from './outing.service';

import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';

import * as faker from 'faker';
import { Outing } from './outing';
import { environment } from '../../environments/environment';

describe('Service: Outing', () => {
  let injector: TestBed;
  let service: OutingService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'outings';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OutingService],
    });
    injector = getTestBed();
    service = injector.get(OutingService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: Outing[] = [];

    for (let i = 1; i < 11; i++) {
      const outing = new Outing(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.date.past(),
        faker.lorem.sentence(),
        faker.datatype.number(),
       null
      );

      mockPosts.push(outing);
    }

    service.getOutings().subscribe((outings) => {
      expect(outings.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
