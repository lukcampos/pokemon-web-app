import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';
import { } from './details.routing';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent,
    data:
    {
      name: 'details',
      logedPage: false
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
