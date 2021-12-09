import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { QuotationDetail } from '../quotation-detail';
import 'jquery';
import '@popperjs/core'; // Edit here
import 'bootstrap/dist/js/bootstrap.bundle';
import { QuotationService } from '../quotation.service';
import { InsuranceService } from 'src/app/insurance/insurance.service';
import { OutingService } from 'src/app/outing/outing.service';
import { OutingDetail } from 'src/app/outing/outingDetail';
import { Insurance } from 'src/app/insurance/insurance';

@Component({
  selector: 'app-quotation-create',
  templateUrl: './quotation-create.component.html',
  styleUrls: ['./quotation-create.component.scss']
})
export class QuotationCreateComponent implements OnInit {
  quotationForm: FormGroup;
  outings: OutingDetail[];
  insurances: Insurance[];
  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private quotationService: QuotationService,
              private outingService: OutingService,
              private insuranceService: InsuranceService) { }

  ngOnInit() {
    this.quotationForm = this.formBuilder.group({
      participants: ["", Validators.required],
      totalCost: ["", Validators.required],
      status: ["", Validators.required],
      outing: ["", Validators.required],
      insurance: ["", Validators.required]
    });
  }

  createQuotation(newQuotation: QuotationDetail) {
    let participants = this.quotationForm.controls.participants.value;
    let totalCost = this.quotationForm.controls.totalCost.value;
    let status = this.quotationForm.controls.status.value;
    let outing = this.quotationForm.controls.outing.value;
    let insurance = this.quotationForm.controls.insurance.value;


    let quotation = {participants, totalCost, status, "outing":{id:outing}, "insurance":{id:insurance}};

    this.quotationService.createQuotation(quotation)
      .subscribe(quotation => {
        this.toastr.success('The outing was created successfully');
        this.quotationForm.reset();
      }, err => {
        this.toastr.error(err, 'Error');
      });

  }

  getOutings(): void {
    this.outingService.getOutings()
      .subscribe(auth => {
        this.outings = auth;
      }, err => {
        this.toastr.error(err, 'Error');
      });
  }

  getInsurances(): void {
    this.insuranceService.getInsurances()
      .subscribe(auth => {
        this.insurances = auth;
      }, err => {
        this.toastr.error(err, 'Error');
      });
  }
  showSuccess(m: QuotationDetail) {
    this.toastr.success('Creado exitosamente!', `QuotationDetail ${m.participants}`, { "progressBar": true, timeOut: 4000 });
  }
  cancelCreation() {
    console.log("Cancelando ...");
    this.quotationForm.reset();
  }

}
