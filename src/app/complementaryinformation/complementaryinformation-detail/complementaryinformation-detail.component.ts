import { Component, Input, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ComplementaryInformation } from '../complementaryinformation';

@Component({
  selector: 'app-complementaryinformation-detail',
  templateUrl: './complementaryinformation-detail.component.html',
  styleUrls: ['./complementaryinformation-detail.component.css']
})
export class ComplementaryinformationDetailComponent implements OnInit {

  @Input() complementaryInformationDetail : ComplementaryInformation;
  constructor() { }

  ngOnInit() {
    console.log(this.complementaryInformationDetail);
  }

}
