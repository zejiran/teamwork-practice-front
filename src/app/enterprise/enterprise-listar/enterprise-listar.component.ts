import { Component, OnInit } from '@angular/core';
import { Enterprise } from '../enterprise';
import { EnterpriseService } from '../enterprise.service';

@Component({
  selector: 'app-enterprise-listar',
  templateUrl: './enterprise-listar.component.html',
  styleUrls: ['./enterprise-listar.component.css']
})
export class EnterpriseListarComponent implements OnInit {

  enterprises: Array<Enterprise>;

  constructor(private enterpriseService: EnterpriseService) {
  }

  getEnterprises(): void {
    this.enterpriseService.getEnterprises()
      .subscribe(enterprises => {
        this.enterprises = enterprises;
      });
  }

  ngOnInit(): void {
    this.getEnterprises();
  }

}
