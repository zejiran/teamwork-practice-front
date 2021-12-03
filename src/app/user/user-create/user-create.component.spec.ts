import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCreateComponent } from './user-create.component';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;
  const toastrService = {
    success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
    error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [{ provide: ToastrService, useValue: toastrService }],
      declarations: [UserCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
