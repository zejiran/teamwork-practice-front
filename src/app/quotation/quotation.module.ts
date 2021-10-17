import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationListarComponent } from './quotation-listar/quotation-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QuotationListarComponent],
  exports: [QuotationListarComponent]
})
export class QuotationModule { }
