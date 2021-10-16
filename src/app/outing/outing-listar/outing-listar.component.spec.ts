/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutingListarComponent } from './outing-listar.component';

describe('OutingListarComponent', () => {
  let component: OutingListarComponent;
  let fixture: ComponentFixture<OutingListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutingListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutingListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
