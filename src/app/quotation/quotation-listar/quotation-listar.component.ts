import { Component, OnInit } from '@angular/core';
import { Quotation } from '../quotation';
import { QuotationDetail } from '../quotation-detail';
import { QuotationService } from '../quotation.service';
import 'jquery';
import '@popperjs/core'; // Edit here
import 'bootstrap/dist/js/bootstrap.bundle';

@Component({
  selector: 'app-quotation-listar',
  templateUrl: './quotation-listar.component.html',
  styleUrls: ['./quotation-listar.component.css']
})
export class QuotationListarComponent implements OnInit {

  quotations: Array<Quotation>;
  quotationSelected: Quotation;
  selected = false;

  constructor(private quotationService: QuotationService) {
  }

  getQuotations(): void {
    this.quotationService.getQuotations()
      .subscribe(quotations => {
        this.quotations = quotations;
      });
  }

  ngOnInit(): void {
    this.getQuotations();
  }

  createQuotation(){
    ($('#exampleModal') as any).modal('show')
  }

  onSelected(quotation: Quotation): void{
      this.selected = true;
      this.quotationService.getQuotation(quotation.id)
      .subscribe(QuotationDetail => {
        this.quotationSelected = QuotationDetail;
     });
  }
}
