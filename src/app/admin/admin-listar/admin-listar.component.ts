import { Component, OnInit } from '@angular/core';
import {Admin} from '../admin';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-admin-listar',
  templateUrl: './admin-listar.component.html',
  styleUrls: ['./admin-listar.component.css']
})
export class AdminListarComponent implements OnInit {
  admins: Array<Admin>;
  constructor(private adminService: AdminService) { }

  getAdmins(): void {
    this.adminService.getAdmins()
      .subscribe(admins => {
        this.admins = admins;
      });
  }

  ngOnInit(): void {
    this.getAdmins();
  }

}
