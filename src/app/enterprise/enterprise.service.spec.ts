/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { EnterpriseService } from "./enterprise.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import * as faker from "faker";
import { Enterprise } from "./enterprise";
import { environment } from "../../environments/environment";

describe("Service: Enterprise", () => {
 let injector: TestBed;
 let service: EnterpriseService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "enterprises";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [EnterpriseService],
   });
   injector = getTestBed();
   service = injector.get(EnterpriseService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: Enterprise[] = [];

   for (let i = 1; i < 11; i++) {
     let enterprise = new Enterprise(
       faker.lorem.sentence(),
     );

     mockPosts.push(enterprise);
   }

   service.getEnterprises().subscribe((enterprises) => {
     expect(enterprises.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});
