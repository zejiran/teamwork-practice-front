import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { OutingDetail } from '../outingDetail';
import { OutingService } from '../outing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Itinerary } from 'src/app/itinerary/itinerary';
import { ItineraryService } from 'src/app/itinerary/itinerary.service';
import 'jquery';
import '@popperjs/core'; // Edit here
import 'bootstrap/dist/js/bootstrap.bundle';
import { ComplementaryInformation } from 'src/app/complementaryinformation/complementaryinformation';
import { complementaryinformationService } from 'src/app/complementaryinformation/complementaryinformation.service';
import { Guide } from 'src/app/guide/guide';
import { GuideService } from 'src/app/guide/guide.service';
import { Route } from 'src/app/route/route';
import { RouteService } from 'src/app/route/route.service';

@Component({
  selector: 'app-outing-create',
  templateUrl: './outing-create.component.html',
  styleUrls: ['./outing-create.component.scss']
})
export class OutingCreateComponent implements OnInit {
  outingForm: FormGroup;
  itineraries: Itinerary[];
  complementaryInformation: ComplementaryInformation[];
  guides: Guide[];
  routes: Route[];
  constructor(private formBuilder: FormBuilder,
              private routeService: RouteService,
              private complementaryInformationService: complementaryinformationService,
              private guideService: GuideService,
              private itineraryService: ItineraryService,
              private toastr: ToastrService,
              private outingService: OutingService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.outingForm = this.formBuilder.group({
      name: ["", Validators.required],
      date: ["", Validators.required],
      place: ["", Validators.required],
      participationCost: ["", Validators.required],
      itinerary: ["", Validators.required],
      complementaryInformation: ["", Validators.required],
      guides: ["", Validators.required],
      routes: ["", Validators.required]
    });
    this.getItineraries();
    this.getComplementaryInformations();
    this.getGuides();
    this.getRoutes();
  }
  showSuccess(m: OutingDetail) {
    this.toastr.success('Creado exitosamente!', `OutingDetail ${m.name}`, { "progressBar": true, timeOut: 4000 });
  }

  createOuting(newOuting: OutingDetail) {
    const a = this.outingForm.controls.date.value;
    const dateB: Date = new Date(a);
    let name = this.outingForm.controls.name.value;
    let place = this.outingForm.controls.place.value;
    let participationCost = this.outingForm.controls.participationCost.value;
    let itinerary = this.outingForm.controls.itinerary.value;
    let complementaryInformation = this.outingForm.controls.complementaryInformation.value;
    let guides = this.outingForm.controls.guides.value;
    let routes = this.outingForm.controls.routes.value;

    let outing = {dateB, name, place, participationCost, "complementaryInformation":{id:complementaryInformation},
                  "guides":[{id:guides}], "routes":[{id:routes}]};

    this.outingService.createOuting(outing)
      .subscribe(outing => {
        this.toastr.success('The outing was created successfully');
        this.outingForm.reset();
      }, err => {
        this.toastr.error(err, 'Error');
      });

  }

  getItineraries(): void {
    this.itineraryService.getItineraries()
      .subscribe(auth => {
        this.itineraries = auth;
      }, err => {
        this.toastr.error(err, 'Error');
      });
  }

  getRoutes(): void {
    this.routeService.getRoutes()
      .subscribe(auth => {
        this.routes = auth;
      }, err => {
        this.toastr.error(err, 'Error');
      });
  }

  getGuides(): void {
    this.guideService.getGuides()
      .subscribe(auth => {
        this.guides = auth;
      }, err => {
        this.toastr.error(err, 'Error');
      });
  }

  getComplementaryInformations(): void {
    this.complementaryInformationService.getComplementaryInformations()
      .subscribe(auth => {
        this.complementaryInformation = auth;
      }, err => {
        this.toastr.error(err, 'Error');
      });
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.outingForm.reset();


  }
  volver() {
    this.router.navigate(['../list'], {relativeTo: this.route});
    this.outingForm.reset();
  }

}
