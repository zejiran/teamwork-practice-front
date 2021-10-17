import { Component, OnInit } from '@angular/core';
import { Multimedia } from '../multimedia';
import { MultimediaService } from '../multimedia.service';

@Component({
  selector: 'app-multimedia-listar',
  templateUrl: './multimedia-listar.component.html',
  styleUrls: ['./multimedia-listar.component.css']
})
export class MultimediaListarComponent implements OnInit {

  multimedias: Array<Multimedia>;

  constructor(private multimediaService: MultimediaService) {
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
