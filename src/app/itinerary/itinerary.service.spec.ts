import * as faker from 'faker';
import { getTestBed, TestBed } from '@angular/core/testing';
import { ItineraryService } from './itinerary.service';
import { environment } from '../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Itinerary } from './itinerary';




describe('Service: Itinerary', () => {
  let injector: TestBed;
  let service: ItineraryService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'itineraries';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItineraryService],
    });
    injector = getTestBed();
    service = injector.get(ItineraryService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('getItineraries() should return 10 records', () => {
    const mockItineraries: Itinerary[] = [];

    for (let i = 1; i < 11; i++) {
      const itinerary = new Itinerary(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );

      mockItineraries.push(itinerary);
    }

    service.getItineraries().subscribe((itineraries) => {
      expect(itineraries.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockItineraries);
  });

});
