import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'main/app.component';
import { LikeBottonComponent } from 'main/pages/LikeBotton.component';

const appRoutes: Routes = [
  { path: 'page-likenumber', component: LikeBottonComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(appRoutes), LikeBottonComponent],
})
export class AppModule {}
