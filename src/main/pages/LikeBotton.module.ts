import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LikeBottonComponent } from 'LikeBotton.component';

const routes = [
  {
    path: 'like-page',
    component: LikeBottonComponent,
  },
];

@NgModule({
  declarations: [LikeBottonComponent],
  imports: [RouterModule.forChild(routes)],
})
export class LikeBottonModule {}
