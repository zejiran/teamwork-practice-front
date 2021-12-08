import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Outing } from '../outing';
import { OutingService } from '../outing.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-outing-create',
  templateUrl: './outing-create.component.html',
  styleUrls: ['./outing-create.component.scss']
})
export class OutingCreateComponent implements OnInit {
  outingForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private outingService: OutingService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.outingForm = this.formBuilder.group({
      name: ["", Validators.required],
      date: ["", Validators.required],
      place: ["", Validators.required],
      participationCost: ["", Validators.required]
    });
  }
  showSuccess(m: Outing) {
    this.toastr.success('Creado exitosamente!', `OutingDetail ${m.name}`, { "progressBar": true, timeOut: 4000 });
  }

  createOuting(newOuting: Outing) {
    const a = this.outingForm.controls.date.value;
    const dateB: Date = new Date(a);
    newOuting.date = dateB;
    this.outingService.createOuting(newOuting)
      .subscribe(outing => {
        this.toastr.success('The outing was created successfully');
        this.outingForm.reset();
      }, err => {
        this.toastr.error(err, 'Error');
      });

  }
  cancelCreation() {
    console.log("Cancelando ...");
    this.outingForm.reset();
  }
  volver() {
    this.router.navigate(['../list'], {relativeTo: this.route});
    this.outingForm.reset();
  }

}
