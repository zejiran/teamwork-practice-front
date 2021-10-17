import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListarComponent } from './transaction-listar/transaction-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TransactionListarComponent],
  exports: [TransactionListarComponent],
})
export class TransactionModule { }
