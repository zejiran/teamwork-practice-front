import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ReviewListarComponent} from './review-listar/review-listar.component';
import {ReviewDetailComponent} from './review-detail/review-detail.component';


const routes: Routes = [{
  path: 'reviews',
  children: [

    {
      path: 'list',
      component: ReviewListarComponent
    },
    /*{
      path: 'new',
      component: ReviewCreateComponent
    },*/
    {
      path: ':id',
      component: ReviewDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
