import * as faker from 'faker';
import { getTestBed, TestBed } from '@angular/core/testing';
import { NaturalPersonService } from './naturalPerson.service';
import { environment } from '../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NaturalPerson } from './naturalPerson';
import { Person } from '../person/person';

describe('Service: naturalPerson', () => {
  let injector: TestBed;
  let service: NaturalPersonService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'persons/natural';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NaturalPersonService],
    });
    injector = getTestBed();
    service = injector.get(NaturalPersonService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('getNaturalPerson() should return 10 records', () => {
    const mockNaturalPersons: NaturalPerson[] = [];

    for (let i = 1; i < 11; i++) {
      const person = new Person(
        faker.datatype.number(),
        faker.lorem.sentence()
      );
      const naturalPerson = new NaturalPerson(100, 'test_user');

      mockNaturalPersons.push(naturalPerson);
    }

    service.getNaturalPersons().subscribe((naturalPersons) => {
      expect(naturalPersons.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockNaturalPersons);
  });

});
