import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselWithGesturesComponent } from './carousel-with-gestures/carousel-with-gestures.component';

const routes: Routes = [
        { path: 'carousel', component: CarouselWithGesturesComponent },
        { path: '', redirectTo: 'carousel', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
