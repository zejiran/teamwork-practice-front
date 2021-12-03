import { Component, OnInit } from '@angular/core';
import {Admin} from '../admin';
import {AdminService} from '../admin.service';
import {reviewDetail} from '../reviewDetail';

@Component({
  selector: 'app-admin-listar',
  templateUrl: './admin-listar.component.html',
  styleUrls: ['./admin-listar.component.css']
})
export class AdminListarComponent implements OnInit {
  admins: Array<Admin>;
  selected = false;
  selectedAdmin: reviewDetail = new reviewDetail('', []);
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
  onSelected(admin: Admin): void{
    if (this.selectedAdmin.id === admin.id && this.selected){
      this.selected = false;
    } else {
      this.selected = true;
      this.adminService.getAdmin(admin.id)
        .subscribe(adminDetail => {
          this.selectedAdmin = adminDetail;
        });
    }
  }

}
