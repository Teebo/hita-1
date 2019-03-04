import { Routes } from '@angular/router';
import { LandingPageComponent } from './langing-page/landing-page.component';
import { SignInComponent } from './signin/signin.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  }

];

