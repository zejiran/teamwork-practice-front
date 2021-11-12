import { NaturalPersonDetail } from './naturalPersonDetail';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-natural-person-detail',
  templateUrl: './natural-person-detail.component.html',
  styleUrls: ['./natural-person-detail.component.css']
})
export class NaturalPersonDetailComponent implements OnInit {

   @Input() naturalPersonDetail: NaturalPersonDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
