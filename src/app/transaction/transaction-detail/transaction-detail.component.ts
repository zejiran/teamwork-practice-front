import {Component, Input, OnInit} from '@angular/core';
import {TransactionDetail} from '../transactionDetail';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  selected: false;
  @Input() transactionDetail: TransactionDetail;
  constructor() { }

  ngOnInit(): void {
    this.transactionDetail = new TransactionDetail(0, '');
  }

}
