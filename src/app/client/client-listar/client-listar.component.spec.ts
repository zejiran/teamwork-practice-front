/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import * as faker from 'faker';
import { ClientListarComponent } from './client-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Client } from '../client';
import { Calendar } from 'src/app/calendar/calendar';
// import { Calendar } from "src/app/calendar/calendar";

describe('ClientListarComponent', () => {
  let component: ClientListarComponent;
  let fixture: ComponentFixture<ClientListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListarComponent);
    component = fixture.componentInstance;
    /*
    let calendar = new Calendar(
      //TO DO: colocar los random de calendar.
    );
    */
    component.clients = [
      new Client(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  it("Should have an td element ", () => {
    expect(debug.query(By.css("td")).nativeElement.innerText).toContain(
      component.clients[0].calendar.id
    );
  });
  */
});
