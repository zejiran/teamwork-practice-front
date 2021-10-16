import { Component, OnInit } from '@angular/core';
import { Quotation } from '../quotation';

@Component({
  selector: 'app-quotation-listar',
  templateUrl: './quotation-listar.component.html',
  styleUrls: ['./quotation-listar.component.css']
})
export class QuotationListarComponent implements OnInit {

  constructor() { }
  quotations: Array<Quotation>;
  ngOnInit() {
  }

}
