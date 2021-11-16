import * as faker from 'faker';
import { getTestBed, TestBed } from '@angular/core/testing';
import { ReviewService } from './review.service';
import { environment } from '../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Review } from './review';
import { Comment } from '../comment/comment';
import { Route } from '../route/route';
import { Outing } from '../outing/outing';

describe('Service: Review', () => {
  let injector: TestBed;
  let service: ReviewService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'reviews';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReviewService],
    });
    injector = getTestBed();
    service = injector.get(ReviewService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: Review[] = [];

    for (let i = 1; i < 11; i++) {
      const review = new Review(
        new Comment(faker.datatype.number(), faker.lorem.sentence(), faker.datatype.number(), faker.datatype.number()),
        faker.datatype.number(),
        new Route(faker.datatype.number(2),
          faker.datatype.number(),
          new Outing(faker.datatype.number(),
            faker.lorem.sentence(),
            faker.datatype.datetime(),
            faker.lorem.sentence(),
            faker.datatype.number()))
      );

      mockPosts.push(review);
    }

    service.getReviews().subscribe((reviews) => {
      expect(reviews.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });


});
