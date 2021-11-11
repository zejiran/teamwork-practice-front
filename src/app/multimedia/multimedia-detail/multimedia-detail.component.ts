import { MultimediaDetail } from './multimediaDetail';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multimedia-detail',
  templateUrl: './multimedia-detail.component.html',
  styleUrls: ['./multimedia-detail.component.css']
})
export class MultimediaDetailComponent implements OnInit {

  @Input() multimediaDetail: MultimediaDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
