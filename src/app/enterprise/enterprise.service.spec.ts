/* tslint:disable:no-unused-variable */

import { getTestBed, TestBed } from '@angular/core/testing';
import { EnterpriseService } from './enterprise.service';

import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';

import * as faker from 'faker';
import { Enterprise } from './enterprise';
import { environment } from '../../environments/environment';
import { Calendar } from '../calendar/calendar';
import { Person } from '../person/person';

describe('Service: Enterprise', () => {
  let injector: TestBed;
  let service: EnterpriseService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'enterprises';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnterpriseService],
    });
    injector = getTestBed();
    service = injector.get(EnterpriseService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getEnterprise() should return 10 records', () => {
    const mockPosts: Enterprise[] = [];

    for (let i = 1; i < 11; i++) {
      const enterprise = new Enterprise(
        new Person(faker.datatype.number(), faker.datatype.string()), faker.datatype.string()
        );

      mockPosts.push(enterprise);
    }

    service.getEnterprises().subscribe((enterprises) => {
      expect(enterprises.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
