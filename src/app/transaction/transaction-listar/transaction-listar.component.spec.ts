/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TransactionListarComponent } from './transaction-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as faker from 'faker';
import { Transaction } from '../transaction';

describe('TransactionListarComponent', () => {
  let component: TransactionListarComponent;
  let fixture: ComponentFixture<TransactionListarComponent>;

  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  enum PaymentType {
    'CREDITCARD',
    'DEBITCARD'
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListarComponent);
    component = fixture.componentInstance;
    component.transactions = [
      new Transaction(
      faker.datatype.number(),
      PaymentType[
        faker.random.arrayElement(Object.getOwnPropertyNames(PaymentType))
        ],
      faker.datatype.number(),
      '01-05-1000',
      faker.datatype.string()
      )
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have an td element ', () => {
    expect(debug.query(By.css('td')).nativeElement.innerText).toContain(
      component.transactions[0].id
    );
  });
});
