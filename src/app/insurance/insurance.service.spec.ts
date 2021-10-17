/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { InsuranceService } from "./insurance.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import * as faker from "faker";
import { Insurance } from "./insurance";
import { environment } from "../../environments/environment";

describe("Service: Insurance", () => {
 let injector: TestBed;
 let service: InsuranceService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "insurances";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [InsuranceService],
   });
   injector = getTestBed();
   service = injector.get(InsuranceService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: Insurance[] = [];

   for (let i = 1; i < 11; i++) {
     let insurance = new Insurance(
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.datatype.number()
     );

     mockPosts.push(insurance);
   }

   service.getInsurances().subscribe((insurances) => {
     expect(insurances.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});
