import { LocationService } from './../location.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Locationn } from '../locationn';


@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.scss']
})
export class LocationCreateComponent implements OnInit {

  locationForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private locationService: LocationService) { }

  createLocation(newLocation: Locationn): void {
    console.warn('Una locación fue creada', newLocation);
    this.locationService.createLocation().subscribe(Locationn => {
      this.showSuccess(Locationn);
    });

    this.locationForm.reset();
  }

  showSuccess(p: Locationn): void {
    this.toastr.success('¡Creación exitosa!', `Locación ${p.id}`, { progressBar: true, timeOut: 3000 });
    setTimeout((): void => {
      location.reload();
    }, 3000);
  }

  cancelCreation(): void {
    console.log('Cancelando...');
    this.locationForm.reset();
  }

  ngOnInit(): void {
    this.locationForm = this.formBuilder.group({
      idLocation: ['', [Validators.required, Validators.minLength(1)]],
      locationName: ['', [Validators.required, Validators.minLength(3)]],
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
    });
  }
}
