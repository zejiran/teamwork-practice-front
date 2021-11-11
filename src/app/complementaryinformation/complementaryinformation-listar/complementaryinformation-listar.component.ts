import { Component, OnInit } from '@angular/core';
import { complementaryinformationService } from '../complementaryinformation.service';
import { ComplementaryInformation } from '../complementaryinformation';

@Component({
  selector: 'app-complementaryinformation-listar',
  templateUrl: './complementaryinformation-listar.component.html',
  styleUrls: ['./complementaryinformation-listar.component.css']
})
export class ComplementaryInformationListarComponent implements OnInit {

  complementaryinformations: Array<ComplementaryInformation>;

  constructor(private complementaryinformationService: complementaryinformationService) {

  }


  getComplementaryInformations(): void {
    this.complementaryinformationService.getComplementaryInformations().subscribe(complementaryinformations => {
      this.complementaryinformations = complementaryinformations;
    });
  }

  ngOnInit(): void {
    this.getComplementaryInformations();
  }

}
