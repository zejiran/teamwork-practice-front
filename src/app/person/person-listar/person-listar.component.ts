import { Component, OnInit } from '@angular/core';
import { Person } from '../multimedia';
import { PersonService } from '../multimedia.service';

@Component({
  selector: 'app-multimedia-listar',
  templateUrl: './multimedia-listar.component.html',
  styleUrls: ['./multimedia-listar.component.css']
})
export class PersonListarComponent implements OnInit {

  multimedias: Array<Person>;

  constructor(private multimediaService: PersonService) {
  }

  getMultimedias(): void {
    this.multimediaService.getMultimedias()
      .subscribe(multimedias => {
        this.multimedias = multimedias;
      });
  }

  ngOnInit(): void {
    this.getMultimedias();
  }

}
