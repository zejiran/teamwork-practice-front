/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItineraryService } from './itinerary.service';

describe('Service: Itinerary', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItineraryService]
    });
  });

  it('should ...', inject([ItineraryService], (service: ItineraryService) => {
    expect(service).toBeTruthy();
  }));
});
