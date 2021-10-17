/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MultimediaListarComponent } from './multimedia-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as faker from 'faker';
import { Multimedia } from '../multimedia';

describe('MultimediaListarComponent', () => {
  let component: MultimediaListarComponent;
  let fixture: ComponentFixture<MultimediaListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultimediaListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaListarComponent);
    component = fixture.componentInstance;
    component.multimedias = [
      new Multimedia(
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
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
      component.multimedias[0].fileName
    );

  });
});
