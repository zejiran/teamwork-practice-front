import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ComplementaryInformation } from '../complementaryinformation';
import { Multimedia } from '../../multimedia/multimedia'
import { complementaryinformationService } from '../complementaryinformation.service';
import { MultimediaService } from 'src/app/multimedia/multimedia.service';
import { MultimediaDetail } from 'src/app/multimedia/multimedia-detail/multimediaDetail';
@Component({
  selector: 'app-complementaryinformation-create',
  templateUrl: './complementaryinformation-create.component.html',
  styleUrls: ['./complementaryinformation-create.component.css']
})
export class ComplementaryinformationCreateComponent implements OnInit {

  ciForm: FormGroup;

  multimedia: MultimediaDetail;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private ciService:complementaryinformationService ,
    private multimediaService:MultimediaService) { }

  ngOnInit() {
    this.ciForm = this.formBuilder.group({
      description: ["", [Validators.required, Validators.minLength(2)]],
      recommendation: ["", Validators.required],
    })
  }

  createCI(newCI: ComplementaryInformation) {
    console.log('ayudaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    console.warn("la actividad fue creada", newCI);
    this.ciService.createComplementaryInformation(newCI)
      .subscribe(activity => {
        this.toastr.success('The activity was created successfully','',{ progressBar: true, timeOut: 1500 });
        this.ciForm.reset();
        setTimeout((): void => {
          location.reload();
        }, 1500);
      }, err => {
        this.toastr.error(err, 'Error');
      });

  }
  cancelCreation() {
    console.log("Cancelando ...");
    this.ciForm.reset();
  }

}
