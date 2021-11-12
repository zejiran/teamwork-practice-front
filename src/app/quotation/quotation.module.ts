import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationListarComponent } from './quotation-listar/quotation-listar.component';
import { QuotationDetailComponent } from './quotation-detail/quotation-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QuotationListarComponent, QuotationDetailComponent],
  exports: [QuotationListarComponent]
})
export class QuotationModule {
}
