import { Component, OnInit } from '@angular/core';

import {Guide} from '../guide';
import {GuideDetail} from '../guideDetail';
import { GuideService } from '../guide.service';
@Component({
  selector: 'app-guide-listar',
  templateUrl: './guide-listar.component.html',
  styleUrls: ['./guide-listar.component.css']
})
export class GuideListarComponent implements OnInit {

  constructor(private guideService: GuideService) { }
  guides: Array<GuideDetail>;
  selectedGuide : Guide;
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
  onSelected(g:Guide):void{
    this.selected = true;
    this.selectedGuide = g;
  }
}




