import { Component, Input, OnInit } from '@angular/core';
import { Guide } from '../guide';
import { GuideDetail } from '../guideDetail';

@Component({
  selector: 'app-guide-detail',
  templateUrl: './guide-detail.component.html',
  styleUrls: ['./guide-detail.component.scss']
})
export class GuideDetailComponent implements OnInit {

  @Input() guideDetail: GuideDetail;

  constructor() { }

  ngOnInit(): void {
    console.log(this.guideDetail);
  }

}
