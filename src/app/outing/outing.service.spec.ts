/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { OutingService } from "./outing.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import * as faker from "faker";
import { Outing } from "./outing";
import { environment } from "../../environments/environment";

describe("Service: Outing", () => {
 let injector: TestBed;
 let service: OutingService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "outings";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [OutingService],
   });
   injector = getTestBed();
   service = injector.get(OutingService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: Outing[] = [];

   for (let i = 1; i < 11; i++) {
     let outing = new Outing(
       faker.lorem.sentence(),
       faker.date.past(),
       faker.lorem.sentence(),
       faker.datatype.number()/*,
       null,
       null,
       null,
       null,
       null,
       null,*/
     );

     mockPosts.push(outing);
   }

   service.getOutings().subscribe((outings) => {
     expect(outings.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});
