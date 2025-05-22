import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../services/auth.facade';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  mobile = '';
  password = '';
  showPassword = false;
  isSubmitting = false; // ✅ new flag for loading state

  constructor(private authFacade: AuthFacade) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    this.authFacade.login(this.mobile, this.password).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.authFacade.navigateToDashboard();
      },
      error: () => {
        this.isSubmitting = false;
        this.authFacade.handleAuthError('Login');
      }
    });
  }
}
