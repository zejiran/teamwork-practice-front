import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BlogListarComponent} from './blog-listar/blog-listar.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';

const routes: Routes = [{
  path: 'blogs',
  children: [

    {
      path: 'list',
      component: BlogListarComponent
    },
    /*{
      path: 'new',
      component: BlogCreateComponent
    },*/
    {
      path: ':id',
      component: BlogDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
