import { NaturalPersonDetail } from './../natural-person-detail/naturalPersonDetail';
import { Component, OnInit } from '@angular/core';
import { NaturalPerson } from '../naturalPerson';
import { NaturalPersonService } from '../naturalPerson.service';

@Component({
  selector: 'app-natural-person-listar',
  templateUrl: './natural-person-listar.component.html',
  styleUrls: ['./natural-person-listar.component.css']
})
export class NaturalPersonListarComponent implements OnInit {

  naturalPersons: Array<NaturalPerson>;
  selectedNaturalPerson: NaturalPersonDetail;
  selected = false;

  constructor(private naturalPersonService: NaturalPersonService) {
  }

  getNaturalPersons(): void {
    this.naturalPersonService.getNaturalPersons()
      .subscribe(naturalPersons => {
        this.naturalPersons = naturalPersons;
      });
  }

  onSelected(naturalPerson: NaturalPerson): void {
    this.naturalPersonService.getNaturalPerson(naturalPerson.id)
    .subscribe(naturalPersonDetail => {
      this.selectedNaturalPerson = naturalPersonDetail;
    });
    this.selected = true;
  }

  ngOnInit(): void {
    this.getNaturalPersons();
  }

}
