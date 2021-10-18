import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListarComponent } from './admin-listar.component';
import {UserListarComponent} from '../../user/user-listar/user-listar.component';
import {DebugElement} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {User} from '../../user/user';
import * as faker from 'faker';
import {By} from '@angular/platform-browser';
import {Admin} from '../admin';

describe('AdminListarComponent', () => {
  let component: AdminListarComponent;
  let fixture: ComponentFixture<AdminListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListarComponent);
    component = fixture.componentInstance;
    component.admins = [
      new Admin(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
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
      component.admins[0].user
    );

  });
});
