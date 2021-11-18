import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListarComponent } from './transaction-listar/transaction-listar.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TransactionListarComponent, TransactionDetailComponent],
  exports: [TransactionListarComponent],
})
export class TransactionModule { }
