import { Component, OnInit } from '@angular/core';
import { Multimedia } from '../multimedia';
import { MultimediaDetail } from '../multimedia-detail/multimediaDetail';
import { MultimediaService } from '../multimedia.service';

@Component({
  selector: 'app-multimedia-listar',
  templateUrl: './multimedia-listar.component.html',
  styleUrls: ['./multimedia-listar.component.css']
})
export class MultimediaListarComponent implements OnInit {
  multimedias: Array<Multimedia>;
  selectedMultimedia: MultimediaDetail;
  selected = false;

  constructor(private multimediaService: MultimediaService) {
  }

  getMultimedias(): void {
    this.multimediaService.getMultimedias()
      .subscribe(multimedias => {
        this.multimedias = multimedias;
      });
  }

  onSelected(multimedia: Multimedia): void {
    this.multimediaService.getMultimedia(multimedia.id)
    .subscribe(multimediaDetail => {
      this.selectedMultimedia = multimediaDetail;
    });
    this.selected=true;
  }

  ngOnInit(): void {
    this.getMultimedias();
  }
}
