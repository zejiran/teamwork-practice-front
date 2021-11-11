import { Component, OnInit } from '@angular/core';
import { Outing } from '../outing';
import { OutingService } from '../outing.service';
import { OutingDetail } from '../outingDetail';

@Component({
  selector: 'app-outing-listar',
  templateUrl: './outing-listar.component.html',
  styleUrls: ['./outing-listar.component.scss']
})
export class OutingListarComponent implements OnInit {

  outings: Array<OutingDetail>;
  selected = false;
  selectedOuting: OutingDetail;
  constructor(private outingService: OutingService) {
  }

  getOutings(): void {
    this.outingService.getOutings()
      .subscribe(outings => {
        this.outings = outings;
      });
  }

  onSelected(o: OutingDetail): void{

    this.outingService.getOutingDetail(o.id)
      .subscribe(outingDetail => {
        this.selectedOuting = outingDetail;
      });
    this.selected = true;
  }

  ngOnInit(): void {
    this.getOutings();
  }


}
