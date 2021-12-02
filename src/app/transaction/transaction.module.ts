import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListarComponent } from './transaction-listar/transaction-listar.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionRoutingModule } from './transaction-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TransactionRoutingModule
  ],
  declarations: [TransactionListarComponent, TransactionDetailComponent],
  exports: [TransactionListarComponent],
})
export class TransactionModule { }
