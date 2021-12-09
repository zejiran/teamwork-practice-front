import { RouteService } from './../route.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Route } from '../route';


import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

@Component({
  selector: 'app-route-create',
  templateUrl: './route-create.component.html',
  styleUrls: ['./route-create.component.scss']
})
export class RouteCreateComponent implements OnInit {
  map: Map;

  Difficulty: string[] = ['EASY', 'AMATEUR', 'EXPERIMENTED']

  routeForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private routeService: RouteService) { }

  createRoute(newRoute: Route): void {
    console.warn('Una nueva ruta fue creada', newRoute);

    this.routeService.createRoute().subscribe(Routen => {
      this.showSuccess(Routen);
    });

    this.routeForm.reset();
  }

  showSuccess(p: Route): void {
    this.toastr.success('¡Creación exitosa!', `Ruta  ${p.routeName}`, { progressBar: true, timeOut: 3000 });
    setTimeout((): void => {
      location.reload();
    }, 3000);
  }

  cancelCreation(): void {
    console.log('Cancelando...');
    this.routeForm.reset();
  }

  ngOnInit(): void {
    this.routeForm = this.formBuilder.group({
      routeName: ['', [Validators.required, Validators.minLength(4)]],
      difficulty: ['', [Validators.required]],
      estimatedDuration: ['', [Validators.required, Validators.minLength(1)]]
    });
    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

}
