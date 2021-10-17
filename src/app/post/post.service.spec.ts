/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { PostService } from "./post.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import * as faker from "faker";
import { Post } from "./post";
import { environment } from "../../environments/environment";

describe("Service: Post", () => {
 let injector: TestBed;
 let service: PostService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "posts";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [PostService],
   });
   injector = getTestBed();
   service = injector.get(PostService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: Post[] = [];

   for (let i = 1; i < 11; i++) {
     let post = new Post(
       faker.random.number()
     );

     mockPosts.push(post);
   }

   service.getPosts().subscribe((posts) => {
     expect(posts.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});
