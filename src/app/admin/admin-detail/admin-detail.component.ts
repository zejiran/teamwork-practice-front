import {Component, Input, OnInit} from '@angular/core';
import {AdminDetail} from '../adminDetail';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {
  @Input() adminDetail = new AdminDetail();

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    let id = 0;
    this.activatedRoute.params.subscribe(params => {
      id = +params.id || 0;
      this.adminService.getAdmin(id)
        .subscribe(personDetail => {
          this.adminDetail = personDetail;
          console.log(this.adminDetail);
        });
    });
    console.log(this.adminDetail);
  }
}
