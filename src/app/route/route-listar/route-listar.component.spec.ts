/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Route } from '../route';
import { RouteListarComponent } from './route-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as faker from 'faker';

describe('RouteListarComponent', () => {
  let component: RouteListarComponent;
  let fixture: ComponentFixture<RouteListarComponent>;

  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouteListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteListarComponent);
    component = fixture.componentInstance;
    component.routes = [
      new Route(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.number(2),
        faker.datatype.number()
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
