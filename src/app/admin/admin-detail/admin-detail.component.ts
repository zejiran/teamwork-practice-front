import {Component, Input, OnInit} from '@angular/core';
import {reviewDetail} from '../reviewDetail';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  @Input() adminDetail = new reviewDetail();

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.adminDetail = new reviewDetail('', []);

  }
}
