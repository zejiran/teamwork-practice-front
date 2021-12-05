import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Guide } from '../guide';
import { GuideService } from '../guide.service';
@Component({
  selector: 'app-guide-create',
  templateUrl: './guide-create.component.html',
  styleUrls: ['./guide-create.component.scss']
})
export class GuideCreateComponent implements OnInit {

  guideForm: FormGroup;
  constructor(private formBuilder:FormBuilder,
    private toastr: ToastrService,
    private guideService:GuideService) { }

  ngOnInit() {
    this.guideForm = this.formBuilder.group({
      name: ["",[Validators.required, Validators.minLength(2)]],
      age: ["",Validators.required]
    })
  }
  createGuide(newGuide: Guide) {
    newGuide.points=0;
    newGuide.reviews=0;
    console.warn("la actividad fue creada", newGuide);
    this.guideService.createGuide(newGuide)
      .subscribe(activity => {
        this.toastr.success('The Guide was created successfully','',{ progressBar: true, timeOut: 1500 });
        this.guideForm.reset();
        setTimeout((): void => {
          location.reload();
        }, 1500);
      }, err => {
        this.toastr.error(err, 'Error');
      });
  }
  cancelCreation() {
    console.log("Cancelando ...");
    this.guideForm.reset();
  }

}
