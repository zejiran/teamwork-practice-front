import {getTestBed, TestBed} from '@angular/core/testing';

import { BlogService } from './blog.service';
import {ClientService} from '../client/client.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';
import {Client} from '../client/client';
import {Blog} from './blog';

describe('BlogService', () => {
  let injector: TestBed;
  let service: BlogService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'blogs';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogService],
    });
    injector = getTestBed();
    service = injector.get(BlogService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: Blog[] = [];

    for (let i = 1; i < 11; i++) {
      const blog = new Blog(
      );

      mockPosts.push(blog);
    }

    service.getBlogs().subscribe((clients) => {
      expect(clients.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
