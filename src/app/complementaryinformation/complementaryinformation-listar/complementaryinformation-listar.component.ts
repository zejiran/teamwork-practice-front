import { Component, OnInit } from '@angular/core';

import {ComplementaryInformation} from '../complementaryinformation'
import { ComplementaryInformationService } from '../complementaryInformation.service';

@Component({
  selector: 'app-guide-listar',
  templateUrl: './guide-listar.component.html',
  styleUrls: ['./guide-listar.component.css']
})
export class GuideListarComponent implements OnInit {

  constructor(private complementaryInformationService:ComplementaryInformationService) { }
  complementaryinformations:Array<ComplementaryInformation>

  ngOnInit() {
    this.complementaryinformations
  }
  getGuides(): void {
    this.complementaryInformationService.getGuides()
      .subscribe(complementaryinformations => {
        this.complementaryinformations = this.complementaryinformations;
      });
  }
}
