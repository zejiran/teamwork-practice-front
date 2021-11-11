/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComplementaryInformation } from '../complementaryinformation';
import { ComplementaryInformationListarComponent } from './complementaryinformation-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as faker from 'faker';
import { Route } from 'src/app/route/route';
import { Outing } from 'src/app/outing/outing';
import { Multimedia } from 'src/app/multimedia/multimedia';
import { Post } from 'src/app/post/post';

describe('ComplementaryInformationListarComponent', () => {
  let component: ComplementaryInformationListarComponent;
  let fixture: ComponentFixture<ComplementaryInformationListarComponent>;

  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComplementaryInformationListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementaryInformationListarComponent);
    component = fixture.componentInstance;
    component.complementaryinformations = [
      new ComplementaryInformation(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        new Multimedia(
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.lorem.sentence(),
          new Route(
            faker.datatype.number(2),
            faker.datatype.number(),
            new Outing(
              faker.lorem.sentence(),
              faker.datatype.datetime(),
              faker.lorem.sentence(),
              faker.datatype.number()
            )
          ),
          new Post(
            faker.datatype.number()
          ),
          ),
        new Outing(
          faker.lorem.sentence(),
          faker.datatype.datetime(),
          faker.lorem.sentence(),
          faker.datatype.number())
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
      component.complementaryinformations[0].id
    );

  });
});
