import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private userService: UserService) {}

  createUser(newUser: User): void {
    console.warn('Un usuario fue creado', newUser);

    this.userService.createUser(newUser).subscribe(user => {
      this.showSuccess(user);
    });

    this.userForm.reset();
  }

  showSuccess(u: User): void {
    this.toastr.success('¡Creación exitosa!', `Usuario ${u.user}`, { progressBar: true, timeOut: 3000 });
    setTimeout((): void => {
      location.reload();
    }, 3000);
  }

  cancelCreation(): void {
    console.log('Cancelando...');
    this.userForm.reset();
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

}
