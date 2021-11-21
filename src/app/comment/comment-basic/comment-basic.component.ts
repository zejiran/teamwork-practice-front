import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../comment';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-comment-basic',
  templateUrl: './comment-basic.component.html',
  styleUrls: ['./comment-basic.component.css']
})
export class CommentBasicComponent implements OnInit {
  selected = false;
  @Input() comment: Comment;
  replies: Array<Comment>;
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {

  }

  onSelected(): void {
    if (this.selected){
      this.selected = false;
      this.replies = [];
    }else{
      this.selected = true;
      this.commentService.getComment(this.comment.id)
        .subscribe(commentDetail => {
          this.replies = commentDetail.replies;
        });    }
  }
}
