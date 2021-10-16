import { Component, OnInit } from '@angular/core';
import { Outing } from '../outing';
import { OutingService } from '../outing.service';

@Component({
  selector: 'app-outing-listar',
  templateUrl: './outing-listar.component.html',
  styleUrls: ['./outing-listar.component.scss']
})
export class OutingListarComponent implements OnInit {

  constructor(private outingService:OutingService) { }
  outings:Array<Outing>;

  getOutings(): void {
    this.outingService.getOutings()
      .subscribe(outings => {
        this.outings = outings;
      });
  }

  ngOnInit() {
    this.getOutings();
  }


}
