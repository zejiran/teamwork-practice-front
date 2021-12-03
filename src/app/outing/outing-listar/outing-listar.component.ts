import { Component, OnInit, Input } from '@angular/core';
import { Outing } from '../outing';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private outingService: OutingService,
              private route: ActivatedRoute,
              private router: Router) {
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

  crearOuting(): void {
    this.router.navigate(['../create'], {relativeTo: this.route});
  }


}
