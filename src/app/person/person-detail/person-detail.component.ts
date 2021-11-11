import { PersonDetail } from './personDetail';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  @Input() personDetail: PersonDetail;

  constructor() { }

  ngOnInit() {
  }

}
