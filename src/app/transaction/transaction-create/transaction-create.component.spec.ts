/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { TransactionCreateComponent } from './transaction-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TransactionCreateComponent', () => {
  let component: TransactionCreateComponent;
  let fixture: ComponentFixture<TransactionCreateComponent>;

  const toastrService = {
    success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
    error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [{ provide: ToastrService, useValue: toastrService }],
      declarations: [ TransactionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
