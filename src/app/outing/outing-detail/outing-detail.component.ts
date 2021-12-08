import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { OutingDetail } from '../outingDetail';

@Component({
  selector: 'app-outing-detail',
  templateUrl: './outing-detail.component.html',
  styleUrls: ['./outing-detail.component.scss']
})
export class OutingDetailComponent implements OnInit {

  @Input() outingDetail: OutingDetail;
  constructor() { }

  ngOnInit(): void {
    this.outingDetail = new OutingDetail(0, '', null, '', 0, null);
  }

}
