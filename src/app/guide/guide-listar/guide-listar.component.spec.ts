/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuideListarComponent } from './guide-listar.component';

describe('GuideListarComponent', () => {
  let component: GuideListarComponent;
  let fixture: ComponentFixture<GuideListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
