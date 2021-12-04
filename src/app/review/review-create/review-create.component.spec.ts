import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCreateComponent } from './review-create.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';

describe('ReviewCreateComponent', () => {
  let component: ReviewCreateComponent;
  let fixture: ComponentFixture<ReviewCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewCreateComponent ],
      imports: [RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
          timeOut: 10000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
        })]
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
