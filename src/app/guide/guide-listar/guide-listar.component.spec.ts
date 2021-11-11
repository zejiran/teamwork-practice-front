/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuideListarComponent } from './guide-listar.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import * as faker from 'faker';
import {Guide} from '../guide';
import { GuideDetail } from '../guide-detail/guideDetail';
import { Outing } from 'src/app/outing/outing';

describe('GuideListarComponent', () => {
  let component: GuideListarComponent;
  let fixture: ComponentFixture<GuideListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GuideListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideListarComponent);
    component = fixture.componentInstance;
    component.guides = [
      new GuideDetail(
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
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
      component.guides[0].name
    );

  });
});
