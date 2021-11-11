import { Component, OnInit } from '@angular/core';

import {Guide} from '../guide';
import {GuideDetail} from '../guide-detail/guideDetail';
import { GuideService } from '../guide.service';
@Component({
  selector: 'app-guide-listar',
  templateUrl: './guide-listar.component.html',
  styleUrls: ['./guide-listar.component.css']
})
export class GuideListarComponent implements OnInit {

  constructor(private guideService: GuideService) { }
  guides: Array<GuideDetail>;
  selectedGuide : GuideDetail;
  selected = false;

  getGuides(): void {
    this.guideService.getGuides()
      .subscribe(guides => {
        this.guides = guides;
      });
  }

  ngOnInit(): void {
    this.getGuides();
  }
  onSelected(g:GuideDetail):void{
    this.selected = true;
    this.selectedGuide = g;
  }
}




