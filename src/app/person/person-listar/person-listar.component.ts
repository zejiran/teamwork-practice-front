import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-listar',
  templateUrl: './person-listar.component.html',
  styleUrls: ['./person-listar.component.css']
})
export class PersonListarComponent implements OnInit {

  persons: Array<Person>;

  constructor(private personService: PersonService) {
  }

  getPersons(): void {
    this.personService.getPersons()
      .subscribe(persons => {
        this.persons = persons;
      });
  }

  ngOnInit(): void {
    this.getPersons();
  }

}
