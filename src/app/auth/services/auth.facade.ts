import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  constructor(private authService: AuthService, private router: Router) {}

  login(mobile: string, password: string): Observable<any> {
    return this.authService.login({ mobile, password });
  }

  register(mobile: string, password: string, firstname: string, lastname: string): Observable<any> {
    return this.authService.register({ mobile, password, firstname, lastname });
  }

  forgotPassword(email: string): Observable<any> {
    return this.authService.forgotPassword({email});
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  navigateToForgotPassword():void {
    this.router.navigate(['/forgot-password']);
  }

  handleAuthError(action: string): void {
    alert(`${action} failed`);
  }
}
