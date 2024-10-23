import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Log In'
  },
  {
    path: 'signin',
    component: SignInComponent,
    title: 'Sign In'
  }
];
