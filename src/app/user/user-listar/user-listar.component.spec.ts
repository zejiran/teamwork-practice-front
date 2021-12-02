import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserListarComponent } from './user-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as faker from 'faker';
import { User } from '../user';

describe('UserListarComponent', () => {
  let component: UserListarComponent;
  let fixture: ComponentFixture<UserListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListarComponent);
    component = fixture.componentInstance;
    component.users = [
      new User(
        faker.datatype.number(),
        faker.lorem.sentence()
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a user name', () => {
    expect(debug.query(By.css('h5')).nativeElement.innerText).toContain(
      component.users[0].user
    );

  });
});
