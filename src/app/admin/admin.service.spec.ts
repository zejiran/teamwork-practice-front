import {getTestBed, TestBed} from '@angular/core/testing';

import { AdminService } from './admin.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';
import {Admin} from './admin';
import * as faker from 'faker';


describe('AdminService', () => {
  let injector: TestBed;
  let service: AdminService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'admins';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdminService],
    });
    injector = getTestBed();
    service = injector.get(AdminService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: Admin[] = [];

    for (let i = 1; i < 11; i++) {
      const admin = new Admin(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );

      mockPosts.push(admin);
    }

    service.getAdmins().subscribe((admins) => {
      expect(admins.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
