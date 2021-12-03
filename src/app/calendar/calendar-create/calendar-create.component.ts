import { CalendarService } from './../calendar.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Calendar } from '../calendar';


@Component({
  selector: 'app-calendar-create',
  templateUrl: './calendar-create.component.html',
  styleUrls: ['./calendar-create.component.scss']
})
export class CalendarCreateComponent implements OnInit {

  calendarForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private calendarService: CalendarService) { }

  createCalendar(newCalendar: Calendar): void {
    console.warn('Una persona natural fue creada', newCalendar);
    this.calendarService.createCalendar().subscribe(Calendar => {
      this.showSuccess(Calendar);
    });

    this.calendarForm.reset();
  }

  showSuccess(p: Calendar): void {
    this.toastr.success('¡Creación exitosa!', `Persona natural ${p.id}`, { progressBar: true, timeOut: 3000 });
    setTimeout((): void => {
      location.reload();
    }, 3000);
  }

  cancelCreation(): void {
    console.log('Cancelando...');
    this.calendarForm.reset();
  }

  ngOnInit(): void {
    this.calendarForm = this.formBuilder.group({});
  }

}
