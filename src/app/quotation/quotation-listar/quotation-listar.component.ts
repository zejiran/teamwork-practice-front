import { Component, OnInit } from '@angular/core';
import { Quotation } from '../quotation';
import { QuotationService } from '../quotation.service';

@Component({
  selector: 'app-quotation-listar',
  templateUrl: './quotation-listar.component.html',
  styleUrls: ['./quotation-listar.component.css']
})
export class QuotationListarComponent implements OnInit {

  quotations: Array<Quotation>;

  constructor(private quotationService: QuotationService) {
  }

  getQuotations(): void {
    this.quotationService.getQuotations()
      .subscribe(quotations => {
        this.quotations = quotations;
        console.log(quotations);
      });
  }

  ngOnInit(): void {
    this.getQuotations();
  }

}
