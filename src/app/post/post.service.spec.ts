/* tslint:disable:no-unused-variable */

import { getTestBed, TestBed } from '@angular/core/testing';
import { PostService } from './post.service';

import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';

import * as faker from 'faker';
import { Post } from './post';
import { environment } from '../../environments/environment';

describe('Service: Post', () => {
  let injector: TestBed;
  let service: PostService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'posts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService],
    });
    injector = getTestBed();
    service = injector.get(PostService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: Post[] = [];

    for (let i = 1; i < 11; i++) {
      const post = new Post(
        faker.random.number()
      );

      mockPosts.push(post);
    }

    service.getPosts().subscribe((posts) => {
      expect(posts.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
