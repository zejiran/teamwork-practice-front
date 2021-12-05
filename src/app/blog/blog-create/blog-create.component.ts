import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {BlogService} from '../blog.service';
import {BlogDetail} from '../blogDetail';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private blogService: BlogService) { }

  cancelCreation(): void {
    this.toastrService.warning('The blog wasn\'t created', 'Blog creation');
    this.router.navigate(['/blogs/list']);
    this.form.reset();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({});
  }

  createBlog(blog: BlogDetail): void{
    this.blogService.createBlog(blog)
      .subscribe(() => {
        this.toastrService.success('The blog was created successfully');
        this.form.reset();
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }

}
