/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { QuotationService } from "./quotation.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import * as faker from "faker";
import { Quotation } from "./quotation";
import { environment } from "../../environments/environment";

describe("Service: Quotation", () => {
 let injector: TestBed;
 let service: QuotationService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "quotations";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [QuotationService],
   });
   injector = getTestBed();
   service = injector.get(QuotationService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: Quotation[] = [];

   for (let i = 1; i < 11; i++) {
     let quotation = new Quotation(
       faker.datatype.number(),
       faker.datatype.number(),
       null,
       null
     );

     mockPosts.push(quotation);
   }

   service.getQuotations().subscribe((quotations) => {
     expect(quotations.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});
