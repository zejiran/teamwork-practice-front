import { Component, OnInit, Input } from '@angular/core';
import { Outing } from 'src/app/outing/outing';
import { QuotationDetail } from '../quotation-detail';

@Component({
  selector: 'app-quotation-detail',
  templateUrl: './quotation-detail.component.html',
  styleUrls: ['./quotation-detail.component.css']
})
export class QuotationDetailComponent implements OnInit {

  @Input() quotationDetail: QuotationDetail;

  constructor() { }

  ngOnInit(): void {
    this.quotationDetail = new QuotationDetail(0, 0, 0, 0, new Outing(0, '', null, '', 0, null));
  }

}
