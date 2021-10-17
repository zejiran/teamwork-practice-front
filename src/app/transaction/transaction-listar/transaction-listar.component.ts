import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';


@Component({
  selector: 'app-transaction-listar',
  templateUrl: './transaction-listar.component.html',
  styleUrls: ['./transaction-listar.component.css']
})
export class TransactionListarComponent implements OnInit {
  transactions: Array<Transaction>;

  constructor(private transactionService: TransactionService) {
  }

  getTransactions(): void {
    this.transactionService.getTransactions()
      .subscribe(transactions => {
        this.transactions = transactions;
      });
  }

  ngOnInit(): void {
    this.getTransactions();
  }

}


