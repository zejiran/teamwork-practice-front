/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Locationn } from '../locationn';
import { LocationListarComponent } from './location-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as faker from 'faker';
import { Route } from 'src/app/route/route';

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
    component.locations = [
      new Locationn(
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        new Route(
          faker.datatype.number(),
          faker.datatype.string(),
          faker.datatype.number(2),
          faker.datatype.number(),
        )
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
      component.locations[0].idLocation
    );

  });
});
