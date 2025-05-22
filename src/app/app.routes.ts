import { Routes } from '@angular/router';
import { LoginFormComponent } from './auth/components/login-form.component';
import { RegisterFormComponent } from './auth/components/register-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password.component';
import { RentPaymentComponent } from './rent/rent-payment.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/components/login-form.component').then(m => m.LoginFormComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/components/register-form.component').then(m => m.RegisterFormComponent)
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./auth/components/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  // {
  //   path: 'dashboard',
  //   loadComponent: () =>
  //     import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  // },
  {
    path: 'rent',
    loadComponent: () =>
      import('./rent/rent-payment.component').then(m => m.RentPaymentComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/home/home.component').then(m => m.HomeComponent)
  },



];
