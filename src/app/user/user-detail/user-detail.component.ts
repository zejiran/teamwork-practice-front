import { UserDetail } from './userDetail';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() userDetail: UserDetail;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const id: number = +this.activatedRoute.snapshot.paramMap.get('id') || 0;
    this.userService.getUser(id)
    .subscribe(userDetail => {
      this.userDetail = userDetail;
    });
  }
}
