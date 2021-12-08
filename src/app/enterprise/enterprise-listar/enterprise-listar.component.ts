import { Component, OnInit, Input } from '@angular/core';
import { Enterprise } from '../enterprise';
import { EnterpriseService } from '../enterprise.service';
import { EnterpriseDetail } from '../enterprise-detail/enterpriseDetail';

@Component({
  selector: 'app-enterprise-listar',
  templateUrl: './enterprise-listar.component.html',
  styleUrls: ['./enterprise-listar.component.css']
})
export class EnterpriseListarComponent implements OnInit {
  @Input() enterprises: Array<Enterprise>;
  selectedEnterprise: EnterpriseDetail;
  selected = false;
  constructor(private enterpriseService: EnterpriseService) {
  }

  getEnterprises(): void {
    this.enterpriseService.getEnterprises()
      .subscribe(enterprises => {
        this.enterprises = enterprises;
      });
  }

  onSelected(enterprise: Enterprise): void {
    this.enterpriseService.getEnterprise(enterprise.id)
    .subscribe(enterpriseDetail => {
      this.selectedEnterprise = enterpriseDetail;
    });
    this.selected = true;
  }

  ngOnInit(): void {
    this.getEnterprises();
  }

}
