import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AwardsComponent } from './component/awards/awards.component';
import { BackgroundComponent } from './component/background/background.component';
import { ButtonComponent } from './component/common/button/button.component';
import { ClientsComponent } from './component/clients/clients.component';
import { ContactComponent } from './component/contact/contact.component';
import { ContactFormComponent } from './component/contact/contact-form.component';
import { ContactInfoComponent } from './component/contact/contact-info.component';
import { ServicesComponent } from './component/services/services.component';
import { FooterComponent } from './component/layout/footer.component';
import { GaryComponent } from './component/gary/gary.component';
import { HeaderComponent } from './component/layout/header.component';
import { HeroImageComponent } from './component/hero-image/hero-image.component';
import { HomeComponent } from './component/home/home.component';
import { InputComponent } from './component/common/input/input.component';
import { LocationComponent } from './component/location/location.component';
import { SectorsComponent } from './component/sectors/sectors.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }), // required for server-side rendering
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AwardsComponent,
    BackgroundComponent,
    ButtonComponent,
    ServicesComponent,
    ClientsComponent,
    ContactComponent,
    ContactFormComponent,
    ContactInfoComponent,
    FooterComponent,
    GaryComponent,
    HeaderComponent,
    HeroImageComponent,
    HomeComponent,
    InputComponent,
    LocationComponent,
    SectorsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
