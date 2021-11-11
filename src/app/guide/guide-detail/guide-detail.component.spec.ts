/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuideDetailComponent } from './guide-detail.component';

describe('GuideDetailComponent', () => {
  let component: GuideDetailComponent;
  let fixture: ComponentFixture<GuideDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
