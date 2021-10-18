import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListarComponent } from './blog-listar.component';
import {DebugElement} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Blog} from '../blog';

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
      new Blog(),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
