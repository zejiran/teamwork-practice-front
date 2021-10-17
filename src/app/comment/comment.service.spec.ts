import * as faker from 'faker';
import { getTestBed, TestBed } from '@angular/core/testing';
import { CommentService } from './comment.service';
import { environment } from '../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Comment } from './comment';

describe('Service: Comment', () => {
  let injector: TestBed;
  let service: CommentService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'comments';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentService],
    });
    injector = getTestBed();
    service = injector.get(CommentService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: Comment[] = [];

    for (let i = 1; i < 11; i++) {
      const comment = new Comment(
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number());

      mockPosts.push(comment);
    }

    service.getComments().subscribe((comments) => {
      expect(comments.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

});
