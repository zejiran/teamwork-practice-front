import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCreateComponent } from './review-create.component';

describe('ReviewCreateComponent', () => {
  let component: ReviewCreateComponent;
  let fixture: ComponentFixture<ReviewCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
