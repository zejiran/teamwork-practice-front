import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Itinerary } from '../itinerary';
import { ItineraryService } from '../itinerary.service';
@Component({
  selector: 'app-itinerary-create',
  templateUrl: './itinerary-create.component.html',
  styleUrls: ['./itinerary-create.component.css']
})
export class ItineraryCreateComponent implements OnInit {

  itineraryForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private itineraryService:ItineraryService) { }

  ngOnInit() {
    this.itineraryForm = this.formBuilder.group({
      lodging: ["", [Validators.required,Validators.minLength(2)]],
      transportation: ["",[Validators.required]]
    })
  }
  showSuccess(m: Itinerary) {
    this.toastr.success('Creado exitosamente!', `ActivityDetail ${m.lodging}`, { "progressBar": true, timeOut: 4000 });
  }

  createItinerary(newIitnerary: Itinerary) {
    console.warn("la actividad fue creada", newIitnerary);
    this.itineraryService.createItinerary(newIitnerary)
      .subscribe(itinerary => {
        this.toastr.success('The itinerary was created successfully','',{ progressBar: true, timeOut: 1500 });
        this.itineraryForm.reset();
        setTimeout((): void => {
          location.reload();
        }, 1500);
      }, err => {
        this.toastr.error(err, 'Error');
      });

  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.itineraryForm.reset();
  }

}

