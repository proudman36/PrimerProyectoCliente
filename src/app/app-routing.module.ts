import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselBrandsComponent } from './carousel-brands/carousel-brands.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './LandingPage/about-us/about-us.component';
import { EmmerreComponent } from './LandingPage/emmerre/emmerre.component';
import { HomeComponent } from './LandingPage/home/home.component';
import { CarouselsComponent } from './LandingPage/welcome-home/carousels/carousels.component';
import { WelcomeHomeComponent } from './LandingPage/welcome-home/welcome-home.component';

const routes: Routes = [
  {path:"header", component:HeaderComponent},
  {path: "welcome", component:WelcomeHomeComponent},
  {path: "carousel",component:CarouselsComponent},
  {path: "about-us",component:AboutUsComponent},
  {path: "emmerre",component:EmmerreComponent},
  {path: "brands",component:CarouselBrandsComponent},
  {path:"",component:HomeComponent, pathMatch:"full"},
  {path:"**",redirectTo:"/",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
