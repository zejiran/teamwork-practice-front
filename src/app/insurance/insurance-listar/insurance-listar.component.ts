import { Component, OnInit } from '@angular/core';
import { Insurance } from '../insurance';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insurance-listar',
  templateUrl: './insurance-listar.component.html',
  styleUrls: ['./insurance-listar.component.css']
})
export class InsuranceListarComponent implements OnInit {

  insurances: Array<Insurance>;

  constructor(private insuranceService: InsuranceService) {
  }

  getInsurances(): void {
    this.insuranceService.getInsurances()
      .subscribe(insurances => {
        this.insurances = insurances;
      });
  }

  ngOnInit(): void {
    this.getInsurances();
  }

}
