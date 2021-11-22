import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListarComponent } from './blog-listar.component';
import {DebugElement} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import * as faker from 'faker';
import {Blog} from '../blog';
import {By} from '@angular/platform-browser';
import {BlogDetail} from "../blogDetail";

describe('BlogListarComponent', () => {
  let component: BlogListarComponent;
  let fixture: ComponentFixture<BlogListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListarComponent);
    component = fixture.componentInstance;
    component.blogs = [
      new BlogDetail([]),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have an td element ', () => {
    expect(debug.query(By.css('td')).nativeElement.innerText).toContain(
      component.blogs[0].id
    );
  });
});
