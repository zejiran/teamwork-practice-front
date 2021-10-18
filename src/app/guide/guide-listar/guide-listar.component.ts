import { Component, OnInit } from '@angular/core';

import {Guide} from '../guide'
import { GuideService } from '../guide.service';

@Component({
  selector: 'app-guide-listar',
  templateUrl: './guide-listar.component.html',
  styleUrls: ['./guide-listar.component.css']
})
export class GuideListarComponent implements OnInit {

  constructor(private guideService:GuideService) { }
  guides:Array<Guide>

  ngOnInit() {
    this.guides
  }
  getGuides(): void {
    this.guideService.getGuides()
      .subscribe(guides => {
        this.guides = guides;
      });
  }
}

