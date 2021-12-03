import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OutingListarComponent } from './outing/outing-listar/outing-listar.component';
import { OutingCreateComponent } from './outing/outing-create/outing-create.component';
import { ActivityListarComponent } from './activity/activity-listar/activity-listar.component';
import { ComplementaryInformationListarComponent } from './complementaryinformation/complementaryinformation-listar/complementaryinformation-listar.component';
import { GuideListarComponent } from './guide/guide-listar/guide-listar.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'outings',
    children: [
      {
        path: 'list',
        component: OutingListarComponent
      },
      {
        path: 'create',
        component: OutingCreateComponent
      }
    ]},
    { path: 'activities',
    children: [
      {
        path: 'list',
        component: ActivityListarComponent
      }
    ]},
    { path: 'complementaryinformations',
    children: [
      {
        path: 'list',
        component: ComplementaryInformationListarComponent
      }
    ]},{ path: 'guides',
    children: [
      {
        path: 'list',
        component: GuideListarComponent
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
