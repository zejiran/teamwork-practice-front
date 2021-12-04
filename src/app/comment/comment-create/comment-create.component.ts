import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {CommentService} from '../comment.service';
import {CommentDetail} from '../commentDetail';
import {Comment} from '../comment';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  form: FormGroup;
  @Input() tread: Comment;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private commentService: CommentService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      text: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1000)]]
    });
  }

  createComment(comment: CommentDetail): void{
    comment.dislikes = 0;
    comment.likes = 0;
    comment.date = new Date();
    this.commentService.createReply(this.tread.id, comment)
      .subscribe(() => {
        this.toastrService.success('The comment was created successfully');
        this.form.reset();
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }
}
