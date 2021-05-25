import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
   { path: 'users', component:LandingPageComponent },
  { path: 'About', component:AboutComponent },
  { path: '', redirectTo:"/users", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
