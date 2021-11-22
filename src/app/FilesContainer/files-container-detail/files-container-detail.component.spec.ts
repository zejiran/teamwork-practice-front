import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesContainerDetailComponent } from './files-container-detail.component';

describe('FilesContainerDetailComponent', () => {
  let component: FilesContainerDetailComponent;
  let fixture: ComponentFixture<FilesContainerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesContainerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesContainerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
