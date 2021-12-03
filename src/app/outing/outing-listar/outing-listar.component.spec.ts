/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from "@angular/router/testing";

import { OutingListarComponent } from './outing-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as faker from 'faker';
import { OutingDetail } from '../outingDetail';
// import { Itinerary } from "../itinerary/itinerary";


describe('OutingListarComponent', () => {
  let component: OutingListarComponent;
  let fixture: ComponentFixture<OutingListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OutingListarComponent],
      imports: [HttpClientTestingModule,
        RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutingListarComponent);
    component = fixture.componentInstance;
    /*
    FALTA INICIALIZAR CLASES
    let editorial = new Editorial(
      faker.random.number(),
      faker.lorem.sentence()
    );
    */
    component.outings = [
      new OutingDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.date.past(),
        faker.lorem.sentence(),
        faker.datatype.number()/*,
      null*/
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
      component.outings[0].name
    );

  });
});
