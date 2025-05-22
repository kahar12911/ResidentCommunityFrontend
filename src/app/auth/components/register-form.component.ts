import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../services/auth.facade';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent {
  firstName = '';
  lastName = '';
  email = '';
  mobile = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  isSubmitting = false;
  success = false;

  constructor(private authFacade: AuthFacade) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  register() {
    if (this.isSubmitting) return;

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.isSubmitting = true;

    this.authFacade.register(
      this.mobile,
      this.password,
      this.firstName,
      this.lastName
      // Add email here if included in your register() method
    ).subscribe({
      next: () => {
        this.success = true;
        this.isSubmitting = false;

        // ✅ Navigate to login after showing success message for 3s
        setTimeout(() => {
          this.success = false;
          this.authFacade.navigateToLogin();
        }, 3000);
      },
      error: () => {
        this.isSubmitting = false;
        this.authFacade.handleAuthError('Registration');
      }
    });
  }


}
