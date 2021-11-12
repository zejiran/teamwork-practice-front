import { NaturalPersonDetail } from './naturalPersonDetail';
import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/person/person';

@Component({
  selector: 'app-natural-person-detail',
  templateUrl: './natural-person-detail.component.html',
  styleUrls: ['./natural-person-detail.component.css']
})
export class NaturalPersonDetailComponent implements OnInit {

   @Input() naturalPersonDetail: NaturalPersonDetail;

  constructor() { }

  ngOnInit(): void {
    this.naturalPersonDetail = new NaturalPersonDetail(0, new Person(0, ''));
  }

}
