/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NaturalPersonListarComponent } from './natural-person-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as faker from 'faker';
import { NaturalPerson } from '../naturalPerson';
import { Person } from '../../person/person';

describe('NaturalPersonListarComponent', () => {
  let component: NaturalPersonListarComponent;
  let fixture: ComponentFixture<NaturalPersonListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NaturalPersonListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalPersonListarComponent);
    component = fixture.componentInstance;
    const person = new Person(
      faker.datatype.number(),
      faker.lorem.sentence()
    );
    component.naturalPersons = [
      new NaturalPerson(100, 'test_user'),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have an td element ', () => {
    expect(debug.query(By.css('td')).nativeElement.innerText).toContain(
      component.naturalPersons[0].id
    );

  });
});
