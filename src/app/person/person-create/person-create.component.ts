import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Person } from '../person';


@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss']
})
export class PersonCreateComponent implements OnInit {

  personForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private personService: PersonService) {}

  createPerson(newPerson: Person): void {
    console.warn('Una persona fue creada', newPerson);

    this.personService.createPerson(newPerson).subscribe(person => {
      this.showSuccess(person);
    });

    this.personForm.reset();
  }

  showSuccess(p: Person): void {
    this.toastr.success('¡Creación exitosa!', `Persona ${p.name}`, { progressBar: true, timeOut: 3000 });
    setTimeout((): void => {
      location.reload();
    }, 3000);
  }

  cancelCreation(): void {
    console.log('Cancelando...');
    this.personForm.reset();
  }

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

}
