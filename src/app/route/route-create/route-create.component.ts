import { RouteService } from './../route.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Route } from '../route';


@Component({
  selector: 'app-route-create',
  templateUrl: './route-create.component.html',
  styleUrls: ['./route-create.component.scss']
})
export class RouteCreateComponent implements OnInit {

  routeForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private routeService: RouteService) { }

  createRoute(newRoute: Route): void {
    console.warn('Una persona natural fue creada', newRoute);
    this.routeService.createRoute().subscribe(Routen => {
      this.showSuccess(Routen);
    });

    this.routeForm.reset();
  }

  showSuccess(p: Route): void {
    this.toastr.success('¡Creación exitosa!', `Persona natural ${p.id}`, { progressBar: true, timeOut: 3000 });
    setTimeout((): void => {
      location.reload();
    }, 3000);
  }

  cancelCreation(): void {
    console.log('Cancelando...');
    this.routeForm.reset();
  }

  ngOnInit(): void {
    this.routeForm = this.formBuilder.group({});
  }

}
