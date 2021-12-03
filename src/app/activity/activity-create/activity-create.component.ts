import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Activity } from '../activity';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from '../activity.service';
@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.css']
})
export class ActivityCreateComponent implements OnInit {
  activityForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
            private toastr: ToastrService,
            private activityService: ActivityService) { }

  ngOnInit() {
    this.activityForm = this.formBuilder.group({
      name: ["", [Validators.required,Validators.minLength(2)]],
      description: ["",[Validators.required]],
      minutes: ["",[Validators.required]]
    })
  }
  showSuccess(m: Activity) {
    this.toastr.success('Creado exitosamente!', `ActivityDetail ${m.name}`, { "progressBar": true, timeOut: 4000 });
  }
  createActivity(newActivity: Activity) {
    console.warn("la actividad fue creada", newActivity);
    this.activityService.createActivity(newActivity)
      .subscribe(activity => {
        this.toastr.success('The activity was created successfully','',{ progressBar: true, timeOut: 1500 });
        this.activityForm.reset();
        setTimeout((): void => {
          location.reload();
        }, 1500);
      }, err => {
        this.toastr.error(err, 'Error');
      });

  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.activityForm.reset();
  }
}
