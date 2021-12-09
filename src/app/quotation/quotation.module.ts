import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationListarComponent } from './quotation-listar/quotation-listar.component';
import { QuotationDetailComponent } from './quotation-detail/quotation-detail.component';
import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationCreateComponent } from './quotation-create/quotation-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    QuotationRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [QuotationListarComponent, QuotationDetailComponent, QuotationCreateComponent],
  exports: [QuotationListarComponent, QuotationCreateComponent]
})
export class QuotationModule {
}
