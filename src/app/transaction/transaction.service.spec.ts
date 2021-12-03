/* tslint:disable:no-unused-variable */

import { getTestBed, TestBed } from '@angular/core/testing';
import { TransactionService } from './transaction.service';

import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';

import * as faker from 'faker';
import { Transaction } from './transaction';
import { environment } from '../../environments/environment';

describe('Service: Post', () => {
  let injector: TestBed;
  let service: TransactionService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'transactions';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService],
    });
    injector = getTestBed();
    service = injector.get(TransactionService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  enum PaymentType {
    'CREDITCARD',
    'DEBITCARD'
  }

  it('getTransaction() should return 10 records', () => {
    const mockPosts: Transaction[] = [];

    for (let i = 1; i < 11; i++) {
      const transaction = new Transaction(
        faker.datatype.number(),
        PaymentType[
          faker.random.arrayElement(Object.getOwnPropertyNames(PaymentType))
          ],
        faker.datatype.number(),
        '01-05-1000',
        faker.lorem.lines()
      );

      mockPosts.push(transaction);
    }

    service.getTransactions().subscribe((transactions) => {
      expect(transactions.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
