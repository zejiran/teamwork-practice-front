import { Component, OnInit } from '@angular/core';
import { Insurance } from '../insurance';

@Component({
  selector: 'app-insurance-listar',
  templateUrl: './insurance-listar.component.html',
  styleUrls: ['./insurance-listar.component.css']
})
export class InsuranceListarComponent implements OnInit {

  constructor() { }
  insurances : Array<Insurance>;
  ngOnInit() {
  }

}
