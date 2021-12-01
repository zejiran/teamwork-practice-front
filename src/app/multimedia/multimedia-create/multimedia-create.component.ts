import { MultimediaService } from './../multimedia.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Multimedia } from '../multimedia';


@Component({
  selector: 'app-multimedia-create',
  templateUrl: './multimedia-create.component.html',
  styleUrls: ['./multimedia-create.component.scss']
})
export class MultimediaCreateComponent implements OnInit {

  multimediaForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private multimediaService: MultimediaService) { }

  createMultimedia(newMultimedia: Multimedia): void {
    console.warn('Un archivo multimedia fue creado', newMultimedia);

    this.multimediaService.createMultimedia(newMultimedia).subscribe(multimedia => {
      this.showSuccess(multimedia);
    });

    this.multimediaForm.reset();
  }

  showSuccess(m: Multimedia): void {
    this.toastr.success('¡Creación exitosa!', `Archivo ${m.fileName}`, { progressBar: true, timeOut: 3000 });
    setTimeout((): void => {
      location.reload();
    }, 3000);
  }

  cancelCreation(): void {
    console.log('Cancelando...');
    this.multimediaForm.reset();
  }

  ngOnInit(): void {
    this.multimediaForm = this.formBuilder.group({
      fileName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

}
