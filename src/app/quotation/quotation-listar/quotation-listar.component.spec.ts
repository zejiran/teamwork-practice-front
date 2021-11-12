/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuotationListarComponent } from './quotation-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as faker from 'faker';
import { Quotation } from '../quotation';
import { Outing } from 'src/app/outing/outing';

describe('QuotationListarComponent', () => {
  let component: QuotationListarComponent;
  let fixture: ComponentFixture<QuotationListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuotationListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationListarComponent);
    component = fixture.componentInstance;
    const outing = new Outing(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.date.past(),
      faker.lorem.sentence(),
      faker.datatype.number()
    );
    component.quotations = [
      new Quotation(
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(2),
        outing
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have an td element ', () => {
    expect(debug.query(By.css('td')).nativeElement.innerText).toContain(
      component.quotations[0].id
    );
  });
});
