import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionListarComponent } from './transaction-listar/transaction-listar.component';

const routes: Routes = [{
  path: 'transactions',
  children: [
    {
      path: 'list',
      component: TransactionListarComponent
    },
  ]
}];
@NgModule({
  imports: [ RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class TransactionRoutingModule { }
