import { PersonDetail } from './personDetail';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  @Input() personDetail: PersonDetail;

  constructor(private activatedRoute: ActivatedRoute, private personService: PersonService) { }

  ngOnInit(): void {
    let id = 0;
    this.activatedRoute.params.subscribe(params => {
      id = +params.id || 0;
      this.personService.getPerson(id)
      .subscribe(personDetail => {
        this.personDetail = personDetail;
      });
    });
  }

}
