import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Enterprise } from '../enterprise';
import { EnterpriseService } from '../enterprise.service';

@Component({
  selector: 'app-enterprise-create',
  templateUrl: './enterprise-create.component.html',
  styleUrls: ['./enterprise-create.component.css']
})
export class EnterpriseCreateComponent implements OnInit {
  enterpriseForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private enterpriseService: EnterpriseService
  ) {

  }

  createEnterprise(newEnterprise: Enterprise) {
    console.warn("El enterprise fue creado", newEnterprise);
    this.enterpriseService.createEnterprise(newEnterprise).subscribe(enterprise => {
      this.showSuccess(enterprise);
    });

    this.enterpriseForm.reset();

  }

  showSuccess(e: Enterprise) {
    this.toastr.success('Creado exitosamente!', `${e.representative}`, { progressBar: true, timeOut: 3000 });
    setTimeout((): void => {
      location.reload();
    }, 3000);
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.enterpriseForm.reset();
  }

  ngOnInit() {
    this.enterpriseForm = this.formBuilder.group({
      user: ["", [Validators.required, Validators.minLength(4)]]
    });
  }
}
