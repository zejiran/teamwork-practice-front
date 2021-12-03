import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { reviewDetail } from '../reviewDetail';
import {AdminService} from '../admin.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private adminService: AdminService) { }

  cancelCreation(): void {
    this.toastrService.warning('The admin wasn\'t created', 'Admin creation');
    this.router.navigate(['/admins/list']);
    this.form.reset();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    });
  }

  createAdmin(admin: reviewDetail): void{
    this.adminService.createAdmin(admin)
      .subscribe(() => {
        this.toastrService.success('The admin was created successfully');
        this.form.reset();
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }

}
