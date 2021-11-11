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
  selectedUser: User;
  selected = false;

  constructor(private userService: UserService) {
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  onSelected(user: User): void{
    if (this.selectedUser==user && this.selected){
      this.selected=false;
    } else {
      this.selected=true;
      this.selectedUser=user;
    }
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
