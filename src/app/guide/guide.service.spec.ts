/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuideService } from './guide.service';

describe('Service: Guide', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuideService]
    });
  });

  it('should ...', inject([GuideService], (service: GuideService) => {
    expect(service).toBeTruthy();
  }));
});
