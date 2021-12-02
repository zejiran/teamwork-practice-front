import { UserDetail } from './../user-detail/userDetail';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-listar',
  templateUrl: './user-listar.component.html',
  styleUrls: ['./user-listar.component.css']
})
export class UserListarComponent implements OnInit {
  users: Array<User>;
  selectedUser: UserDetail;
  selectedUID: number;
  selected = false;

  constructor(private userService: UserService) {
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  onSelected(user: User): void {
    this.userService.getUser(user.id)
    .subscribe(userDetail => {
      this.selectedUser = userDetail;
    });
    this.selected = true;
    this.selectedUID = user.id;
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
