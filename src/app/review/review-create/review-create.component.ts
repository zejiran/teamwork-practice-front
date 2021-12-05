import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {ReviewService} from '../review.service';
import {RouteDetail} from '../../route/route-detail';
import {ReviewDetail} from '../reviewDetail';
import {CommentDetail} from '../../comment/commentDetail';
import {CommentService} from '../../comment/comment.service';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css']
})
export class ReviewCreateComponent implements OnInit {


  form: FormGroup;
  @Input() routeDetail: RouteDetail;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private reviewService: ReviewService,
    private commentService: CommentService) { }

  cancelCreation(): void {
    this.toastrService.warning('The review wasn\'t created', 'Review creation');
    this.router.navigate(['/reviews/list']);
    this.form.reset();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      text: ['', [Validators.maxLength(500)]],
      score: ['', [Validators.required]],
    });
  }

  createReview(review: ReviewDetail): void{
    const c = new CommentDetail();
    c.date = new Date();
    c.likes = 0;
    c.dislikes = 0;
    c.text = this.form.value.text;
    this.commentService.createComment(c).subscribe();
    review.comment = c;
    this.reviewService.createReview( review)
      .subscribe(() => {
        this.toastrService.success('The review was created successfully');
        this.form.reset();
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }


}
