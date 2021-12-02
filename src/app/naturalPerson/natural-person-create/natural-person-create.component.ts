import { NaturalPersonService } from './../naturalPerson.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NaturalPerson } from '../naturalPerson';


@Component({
  selector: 'app-natural-person-create',
  templateUrl: './natural-person-create.component.html',
  styleUrls: ['./natural-person-create.component.scss']
})
export class NaturalPersonCreateComponent implements OnInit {

  naturalPersonForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private naturalPersonService: NaturalPersonService) { }

  createNaturalPerson(newNaturalPerson: NaturalPerson): void {
    console.warn('Una persona natural fue creada', newNaturalPerson);

    this.naturalPersonService.createNaturalPerson().subscribe(naturalPerson => {
      this.showSuccess(naturalPerson);
    });

    this.naturalPersonForm.reset();
  }

  showSuccess(p: NaturalPerson): void {
    this.toastr.success('¡Creación exitosa!', `Persona natural ${p.id}`, { progressBar: true, timeOut: 3000 });
    setTimeout((): void => {
      location.reload();
    }, 3000);
  }

  cancelCreation(): void {
    console.log('Cancelando...');
    this.naturalPersonForm.reset();
  }

  ngOnInit(): void {
    this.naturalPersonForm = this.formBuilder.group({});
  }

}
