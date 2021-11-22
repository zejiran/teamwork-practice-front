import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotationListarComponent } from './quotation-listar/quotation-listar.component';
import { QuotationDetailComponent } from './quotation-detail/quotation-detail.component';

const routes: Routes = [{
  path: 'quotations',
  children: [
    {
      path: 'list',
      component: QuotationListarComponent
    },
    {
      path: ':id',
      component: QuotationDetailComponent
    },
  ]
}];

@NgModule({
  imports: [ RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class QuotationRoutingModule { }
