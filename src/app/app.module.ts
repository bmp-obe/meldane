import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './component/background/background.component';
import { ButtonComponent } from './component/common/button/button.component';
import { ContactComponent } from './component/contact/contact.component';
import { ContactInformationComponent } from './component/contact/contact-information.component';
import { ClientsComponent } from './component/clients/clients.component';
import { FooterComponent } from './component/layout/footer.component';
import { HeaderComponent } from './component/layout/header.component';
import { HeroImageComponent } from './component/hero-image/hero-image.component';
import { HomeComponent } from './component/home/home.component';
import { InputComponent } from './component/common/input/input.component';
import { SectorsComponent } from './component/sectors/sectors.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot()
  ],
  declarations: [
    AppComponent,
    BackgroundComponent,
    ButtonComponent,
    ClientsComponent,
    ContactComponent,
    ContactInformationComponent,
    FooterComponent,
    HeaderComponent,
    HeroImageComponent,
    HomeComponent,
    InputComponent,
    SectorsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
