/* tslint:disable:no-unused-variable */

import { getTestBed, TestBed } from '@angular/core/testing';
import { complementaryinformationService } from './complementaryinformation.service';

import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';

import * as faker from 'faker';
import { ComplementaryInformation } from './complementaryinformation';
import { environment } from '../../environments/environment';
import { Outing } from '../outing/outing';
import { Multimedia } from '../multimedia/multimedia';
import { Route } from '../route/route';
import { Post } from '../post/post';

describe('Service: Complementary Information', () => {
  let injector: TestBed;
  let service: complementaryinformationService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'complementaryinformations';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [complementaryinformationService],
    });
    injector = getTestBed();
    service = injector.get(complementaryinformationService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: ComplementaryInformation[] = [];

    for (let i = 1; i < 11; i++) {
      const complementaryinformation = new ComplementaryInformation(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        new Multimedia(
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.lorem.sentence(),
          new Route(
            faker.lorem.sentence(),
            faker.datatype.number(),
            new Outing(
              faker.datatype.number(),
              faker.lorem.sentence(),
              faker.datatype.datetime(),
              faker.lorem.sentence(),
              faker.datatype.number()
            ),
          ),
          new Post(
            faker.datatype.number()
          )
        ),
        new Outing(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.datatype.datetime(),
          faker.lorem.sentence(),
          faker.datatype.number()
        )
      );

      mockPosts.push(complementaryinformation);
    }

    service.getComplementaryInformations().subscribe((complementaryinformations) => {
      expect(complementaryinformations.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
