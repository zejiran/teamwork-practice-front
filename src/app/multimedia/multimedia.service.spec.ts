import * as faker from 'faker';
import { getTestBed, TestBed } from '@angular/core/testing';
import { MultimediaService } from './multimedia.service';
import { environment } from '../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Multimedia } from './multimedia';

describe('Service: Multimedia', () => {
  let injector: TestBed;
  let service: MultimediaService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'multimedias';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MultimediaService],
    });
    injector = getTestBed();
    service = injector.get(MultimediaService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {
    const mockPosts: Multimedia[] = [];

    for (let i = 1; i < 11; i++) {
      const multimedia = new Multimedia(
        faker.datatype.number(),
        faker.lorem.sentence()
      );

      mockPosts.push(multimedia);
    }

    service.getMultimedias().subscribe((multimedias) => {
      expect(multimedias.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

});
