/* tslint:disable:no-unused-variable */

import { getTestBed, TestBed } from '@angular/core/testing';
import { ClientService } from './client.service';

import * as faker from 'faker';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { Client } from './client';
import { environment } from '../../environments/environment';
// import { Calendar } from '../calendar/calendar';

describe('Service: Client', () => {
  let injector: TestBed;
  let service: ClientService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'clients';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientService],
    });
    injector = getTestBed();
    service = injector.get(ClientService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getClient() should return 10 records', () => {
    const mockPosts: Client[] = [];

    for (let i = 1; i < 11; i++) {
      const client = new Client(
        null
      );

      mockPosts.push(client);
    }

    service.getClients().subscribe((clients) => {
      expect(clients.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
