import { Component, OnInit } from '@angular/core';
import { Outing } from '../outing';

@Component({
  selector: 'app-outing-listar',
  templateUrl: './outing-listar.component.html',
  styleUrls: ['./outing-listar.component.scss']
})
export class OutingListarComponent implements OnInit {

  constructor() { }
  outings:Array<Outing>;
  ngOnInit() {
  }

}
