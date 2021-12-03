import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListarComponent } from './transaction-listar/transaction-listar.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TransactionRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TransactionListarComponent, TransactionDetailComponent, TransactionCreateComponent],
  exports: [TransactionListarComponent, TransactionDetailComponent, TransactionCreateComponent],
})
export class TransactionModule { }
