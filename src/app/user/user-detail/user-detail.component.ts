import { User } from './../user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() userDetail!: User;

  constructor() { }

  ngOnInit() {
    console.log(this.userDetail.id)
  }

}
