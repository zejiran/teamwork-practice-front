import * as faker from 'faker';
import { getTestBed, TestBed } from '@angular/core/testing';
import { PersonService } from './person.service';
import { environment } from '../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Person } from './person';

describe('Service: Person', () => {
  let injector: TestBed;
  let service: PersonService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'persons';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonService],
    });
    injector = getTestBed();
    service = injector.get(PersonService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: Person[] = [];

    for (let i = 1; i < 11; i++) {
      const person = new Person(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );

      mockPosts.push(person);
    }

    service.getPersons().subscribe((persons) => {
      expect(persons.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

});
