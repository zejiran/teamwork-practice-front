import { UserDetail } from './userDetail';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() userDetail!: UserDetail;

  constructor() { }

  ngOnInit() {
  }
}
