import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './pages/features/features.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AddFeatureComponent } from './pages/features/add-feature/add-feature.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModel } from 'src/material.model';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { UserlistingComponent } from './pages/userlisting/userlisting.component';
import { UpdatepopupComponent } from './components/updatepopup/updatepopup.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    NotFoundComponent,
    AboutMeComponent,
    FooterComponent,
    FeedbackComponent,
    AddFeatureComponent,
    RegistrationComponent,
    LoginComponent,
    UserlistingComponent,
    UpdatepopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModel,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
