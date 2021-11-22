import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommentDetailComponent} from './comment-detail/comment-detail.component';
import {CommentListarComponent} from './comment-listar/comment-listar.component';

const routes: Routes = [{
  path: 'comments',
  children: [

    {
      path: 'list',
      component: CommentListarComponent
    },
    /*{
      path: 'new',
      component: CommentCreateComponent
    },*/
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
