import {Component, Input, OnInit} from '@angular/core';
import {AdminDetail} from '../adminDetail';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  @Input() adminDetail: AdminDetail;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService
  ) {
  }

  adminId: number;
  getAdminDetail(): void {
    this.adminService.getAdmin(this.adminId)
      .subscribe(authorDetail => {
        this.adminDetail = authorDetail;
      });
  }
  ngOnInit(): void {
    if (this.adminDetail === undefined) {
      console.log('routerLink');
      this.adminId = +this.route.snapshot.paramMap.get('id');
      this.getAdminDetail();

    } else { console.log(this.adminDetail.id); }
  }
}
