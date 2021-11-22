import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationListarComponent } from './quotation-listar/quotation-listar.component';
import { QuotationDetailComponent } from './quotation-detail/quotation-detail.component';
import { QuotationRoutingModule } from './quotation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    QuotationRoutingModule
  ],
  declarations: [QuotationListarComponent, QuotationDetailComponent],
  exports: [QuotationListarComponent]
})
export class QuotationModule {
}
