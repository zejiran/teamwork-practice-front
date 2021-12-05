import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommentDetailComponent} from './comment-detail/comment-detail.component';
import {CommentListarComponent} from './comment-listar/comment-listar.component';
import {CommentCreateComponent} from './comment-create/comment-create.component';
import {CommentRepliesComponent} from './comment-replies/comment-replies.component';

const routes: Routes = [{
  path: 'comments',
  children: [

    {
      path: 'list',
      component: CommentRepliesComponent
    },
    {
      path: 'new',
      component: CommentCreateComponent
    },
    {
      path: ':id',
      component: CommentDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
