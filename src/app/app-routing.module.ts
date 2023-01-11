import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercialComponent } from './AboutUs/Commercial/commercial/commercial.component';
import { ServicesComponent } from './AboutUs/Services/services/services.component';
import { CarouselBrandsComponent } from './carousel-brands/carousel-brands.component';
import { ContactComponent } from './Contact/contact/contact.component';
import { FairsComponent } from './Expositions/fairs/fairs.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './LandingPage/about-us/about-us.component';
import { EmmerreComponent } from './LandingPage/emmerre/emmerre.component';
import { HomeComponent } from './LandingPage/home/home.component';
import { CarouselsComponent } from './LandingPage/welcome-home/carousels/carousels.component';
import { WelcomeHomeComponent } from './LandingPage/welcome-home/welcome-home.component';
import { EngineComponent } from './Products/engine/engine.component';
import { OtherComponent } from './Products/other/other.component';
import { ProductsComponent } from './Products/products/products.component';
import { SuspensionComponent } from './Products/suspension/suspension.component';
import { TransmisionComponent } from './Products/transmision/transmision.component';

const routes: Routes = [
  {path:"header", component:HeaderComponent},
  {path: "welcome", component:WelcomeHomeComponent},
  {path: "carousel",component:CarouselsComponent},
  {path: "about-us",component:AboutUsComponent},
  {path: "emmerre",component:EmmerreComponent},
  {path: "brands",component:CarouselBrandsComponent},
  {path: "commercial",component:CommercialComponent},
  {path: "services", component:ServicesComponent},
  {path: "fairs", component:FairsComponent},
  {path: "products", component:ProductsComponent},
  {path: "engine", component:EngineComponent},
  {path: "transmision", component:TransmisionComponent},
  {path: "suspension", component:SuspensionComponent},
  {path: "other", component:OtherComponent},
  {path: "contact", component:ContactComponent},
  {path:"",component:HomeComponent, pathMatch:"full"},
  {path:"**",redirectTo:"/",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
