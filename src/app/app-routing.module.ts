import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './pages/features/features.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { UserlistingComponent } from './pages/userlisting/userlisting.component';
import { authGuard } from './guard/auth.guard';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { FlightSearchComponent } from './pages/flight-search/flight-search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'features', component: FeaturesComponent, canActivate: [authGuard] },
  { path: 'flights-search',component:FlightSearchComponent },
  { path: 'pricing', component: PricingComponent, canActivate: [authGuard] },
  { path: 'about-me', component: AboutMeComponent, canActivate: [authGuard] },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserlistingComponent, canActivate: [authGuard] },
  { path: 'user', component: UserlistingComponent, canActivate: [authGuard] },
  { path: 'maps', component: GoogleMapsComponent, canActivate: [authGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
