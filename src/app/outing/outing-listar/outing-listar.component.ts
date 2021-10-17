import { Component, OnInit } from '@angular/core';
import { Outing } from '../outing';
import { OutingService } from '../outing.service';

@Component({
  selector: 'app-outing-listar',
  templateUrl: './outing-listar.component.html',
  styleUrls: ['./outing-listar.component.scss']
})
export class OutingListarComponent implements OnInit {

  outings: Array<Outing>;

  constructor(private outingService: OutingService) {
  }

  getOutings(): void {
    this.outingService.getOutings()
      .subscribe(outings => {
        this.outings = outings;
      });
  }

  ngOnInit(): void {
    this.getOutings();
  }


}
