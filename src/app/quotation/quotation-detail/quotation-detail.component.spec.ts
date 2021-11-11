import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationDetailComponent } from './quotation-detail.component';

describe('QuotationDetailComponent', () => {
  let component: QuotationDetailComponent;
  let fixture: ComponentFixture<QuotationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
