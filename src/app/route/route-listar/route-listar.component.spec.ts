/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Route } from '../route';
import { LocationListarComponent } from './route-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as faker from 'faker';

describe('LocationListarComponent', () => {
  let component: LocationListarComponent;
  let fixture: ComponentFixture<LocationListarComponent>;

  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocationListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationListarComponent);
    component = fixture.componentInstance;
    component.routes = [
      new Route(
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number()
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
      component.routes[0].idLocation
    );

  });
});
