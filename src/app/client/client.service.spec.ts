/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { ClientService } from "./client.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import * as faker from "faker";
import { Client } from "./client";
import { environment } from "../../environments/environment";

describe("Service: Client", () => {
 let injector: TestBed;
 let service: ClientService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "clients";

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

 it("getPost() should return 10 records", () => {
   let mockPosts: Client[] = [];

   for (let i = 1; i < 11; i++) {
     let client = new Client(
       //null
     );

     mockPosts.push(client);
   }

   service.getClients().subscribe((clients) => {
     expect(clients.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});
