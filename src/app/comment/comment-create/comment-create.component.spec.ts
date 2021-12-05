import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCreateComponent } from './comment-create.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';

describe('CommentCreateComponent', () => {
  let component: CommentCreateComponent;
  let fixture: ComponentFixture<CommentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentCreateComponent ],
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
    fixture = TestBed.createComponent(CommentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
