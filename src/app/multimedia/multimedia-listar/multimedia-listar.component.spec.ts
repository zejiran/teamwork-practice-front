import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaListarComponent } from './multimedia-listar.component';

describe('MultimediaListarComponent', () => {
  let component: MultimediaListarComponent;
  let fixture: ComponentFixture<MultimediaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
