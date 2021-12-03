import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PostDetail } from '../post-detail/postDetail';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private postService: PostService
  ) {

  }

  createPost(newPost: PostDetail) {
    console.warn("El post fue creado", newPost);
    this.postService.createPost(newPost).subscribe(post => {
      this.showSuccess(post);
    });

    this.postForm.reset();

  }

  showSuccess(p: PostDetail) {
    this.toastr.success('Creado exitosamente!', `${p.id}`, { progressBar: true, timeOut: 3000 });
    setTimeout((): void => {
      location.reload();
    }, 3000);
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.postForm.reset();
  }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ["", [Validators.required, Validators.minLength(4)]],
      ratings: ["", Validators.required]
    });
  }
}
