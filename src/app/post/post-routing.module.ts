import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListarComponent } from './post-listar/post-listar.component';

const routes: Routes = [{
  path: 'posts',
  children: [
    {
      path: 'list',
      component: PostListarComponent
    },
  ]
}];
@NgModule({
  imports: [ RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class PostRoutingModule { }
