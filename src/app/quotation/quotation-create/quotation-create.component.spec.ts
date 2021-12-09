/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { RouterTestingModule } from "@angular/router/testing";

import { QuotationCreateComponent } from './quotation-create.component';

describe('QuotationCreateComponent', () => {
  let component: QuotationCreateComponent;
  let fixture: ComponentFixture<QuotationCreateComponent>;
  const toastrService = {
    success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
    error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsModule,
        QuotationCreateComponent,
        HttpClientTestingModule,
        RouterTestingModule ],
        providers: [{ provide: ToastrService, useValue: toastrService }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
