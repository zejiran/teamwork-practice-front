import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaDetailComponent } from './multimedia-detail.component';

describe('MultimediaDetailComponent', () => {
  let component: MultimediaDetailComponent;
  let fixture: ComponentFixture<MultimediaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
