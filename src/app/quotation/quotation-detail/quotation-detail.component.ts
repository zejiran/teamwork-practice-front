import { Component, OnInit, Input } from '@angular/core';
import { QuotationDetail } from '../quotation-detail'

@Component({
  selector: 'app-quotation-detail',
  templateUrl: './quotation-detail.component.html',
  styleUrls: ['./quotation-detail.component.css']
})
export class QuotationDetailComponent implements OnInit {

  @Input() quotationDetail:QuotationDetail

  constructor() { }

  ngOnInit(): void {
    console.log(this.quotationDetail.status)
  }

}
