import * as faker from 'faker';
import { getTestBed, TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { environment } from '../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from './user';

describe('Service: User', () => {
  let injector: TestBed;
  let service: UserService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'users';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    injector = getTestBed();
    service = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: User[] = [];

    for (let i = 1; i < 11; i++) {
      const user = new User(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );

      mockPosts.push(user);
    }

    service.getUsers().subscribe((users) => {
      expect(users.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

});
