/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Enterprise } from '../enterprise';
import { EnterpriseListarComponent } from './enterprise-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as faker from 'faker';
import { Calendar } from 'src/app/calendar/calendar';
import { Person } from 'src/app/person/person';

describe('EnterpriseListarComponent', () => {
  let component: EnterpriseListarComponent;
  let fixture: ComponentFixture<EnterpriseListarComponent>;

  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnterpriseListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseListarComponent);
    component = fixture.componentInstance;
    component.enterprises = [
      new Enterprise(
        new Person(faker.datatype.number(), faker.datatype.string()),
        faker.lorem.sentence()
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Should have an td element ', () => {
  //   expect(debug.query(By.css('td')).nativeElement.innerText).toContain(
  //     component.enterprises[0]
  //   );
  // });
});
