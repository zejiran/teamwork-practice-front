import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesContainerListarComponent } from './files-container-listar.component';

describe('FilesContainerListarComponent', () => {
  let component: FilesContainerListarComponent;
  let fixture: ComponentFixture<FilesContainerListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesContainerListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesContainerListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
