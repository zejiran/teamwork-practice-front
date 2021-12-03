import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {reviewDetail} from '../../admin/adminDetail';
import {ReviewService} from '../review.service';
import {RouteDetail} from '../../route/route-detail';
import {ReviewDetail} from '../reviewDetail';

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
    private reviewService: ReviewService) { }

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

  createAdmin(review: ReviewDetail): void{
    this.reviewService.createReview(2, review)
      .subscribe(() => {
        this.toastrService.success('The review was created successfully');
        this.form.reset();
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }


}
