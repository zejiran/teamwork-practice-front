import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonDetail } from '../person-detail/personDetail';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-listar',
  templateUrl: './person-listar.component.html',
  styleUrls: ['./person-listar.component.css']
})
export class PersonListarComponent implements OnInit {

  persons: Array<Person>;
  selectedPerson: PersonDetail;
  selected = false;

  constructor(private personService: PersonService) {
  }

  getPersons(): void {
    this.personService.getPersons()
      .subscribe(persons => {
        this.persons = persons;
      });
  }

  onSelected(person: Person): void {
    this.personService.getPerson(person.id)
    .subscribe(personDetail => {
      this.selectedPerson = personDetail;
    });
    this.selected=true;
  }

  ngOnInit(): void {
    this.getPersons();
  }

}
