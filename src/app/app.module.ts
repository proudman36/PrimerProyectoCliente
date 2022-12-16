import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeHomeComponent } from './LandingPage/welcome-home/welcome-home.component';
import { CarouselsComponent } from './LandingPage/welcome-home/carousels/carousels.component';
import { CarouselBrandsComponent } from './carousel-brands/carousel-brands.component';
import { AboutUsComponent } from './LandingPage/about-us/about-us.component';
import { EmmerreComponent } from './LandingPage/emmerre/emmerre.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './LandingPage/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeHomeComponent,
    CarouselsComponent,
    CarouselBrandsComponent,
    AboutUsComponent,
    EmmerreComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
