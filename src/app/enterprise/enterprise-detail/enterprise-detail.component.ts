import { Component, Input, OnInit } from '@angular/core';
import { Calendar } from 'src/app/calendar/calendar';
import { Person } from 'src/app/person/person';
import { EnterpriseDetail } from './enterpriseDetail';

@Component({
  selector: 'app-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.scss']
})
export class EnterpriseDetailComponent implements OnInit {

  @Input() enterpriseDetail: EnterpriseDetail;

  constructor() { }

  ngOnInit(): void {
    this.enterpriseDetail = new EnterpriseDetail(10, new Person(0, '0'), '0', new Calendar(0), '0', '0');
  }
}
