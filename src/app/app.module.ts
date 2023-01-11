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
import { CommercialComponent } from './AboutUs/Commercial/commercial/commercial.component';
import { ServicesComponent } from './AboutUs/Services/services/services.component';
import { FairsComponent } from './Expositions/fairs/fairs.component';
import { ContactComponent } from './Contact/contact/contact.component';
import { ProductsComponent } from './Products/products/products.component';
import { EngineComponent } from './Products/engine/engine.component';
import { TransmisionComponent } from './Products/transmision/transmision.component';
import { SuspensionComponent } from './Products/suspension/suspension.component';
import { OtherComponent } from './Products/other/other.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

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
    CommercialComponent,
    ServicesComponent,
    FairsComponent,
    ContactComponent,
    ProductsComponent,
    EngineComponent,
    TransmisionComponent,
    SuspensionComponent,
    OtherComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
