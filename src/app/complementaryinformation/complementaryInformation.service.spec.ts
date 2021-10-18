/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComplementaryInformationService } from './complementaryInformation.service';

describe('Service: ComplementaryInformation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComplementaryInformationService]
    });
  });

  it('should ...', inject([ComplementaryInformationService], (service: ComplementaryInformationService) => {
    expect(service).toBeTruthy();
  }));
});
