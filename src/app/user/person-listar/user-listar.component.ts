import { Component, OnInit } from '@angular/core';
import { User } from '../person';
import { UserService } from '../person.service';

@Component({
  selector: 'app-person-listar',
  templateUrl: './person-listar.component.html',
  styleUrls: ['./person-listar.component.css']
})
export class UserListarComponent implements OnInit {

  persons: Array<User>;

  constructor(private personService: UserService) {
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
