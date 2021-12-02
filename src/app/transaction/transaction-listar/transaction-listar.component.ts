import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';
import { TransactionDetail } from '../transaction-detail/transactionDetail';


@Component({
  selector: 'app-transaction-listar',
  templateUrl: './transaction-listar.component.html',
  styleUrls: ['./transaction-listar.component.css']
})
export class TransactionListarComponent implements OnInit {
  transactions: Array<Transaction>;
  selectedTransaction: TransactionDetail;
  selected = false;
  constructor(private transactionService: TransactionService) {
  }

  getTransactions(): void {
    this.transactionService.getTransactions()
      .subscribe(transactions => {
        this.transactions = transactions;
      });
  }

  onSelected(transaction: Transaction): void {
    this.transactionService.getTransaction(transaction.id)
    .subscribe(transactionDetail => {
      this.selectedTransaction = transactionDetail;
    });
    this.selected = true;
  }

  ngOnInit(): void {
    this.getTransactions();
  }

}


