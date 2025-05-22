import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../services/auth.facade';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email = '';

  constructor(private authFacade: AuthFacade) {}
  
  cancel() {
    // Navigate to login or home
    this.authFacade.navigateToLogin(); // or use Router directly
  }


  // sendReset() {
  //   if (!this.email) {
  //     alert('Please enter your email.');
  //     return;
  //   }

  //   this.authFacade.forgotPassword(this.email).subscribe({
  //     next: () => alert('A reset link has been sent to your email.'),
  //     error: () => alert('Something went wrong. Please try again.')
  //   });
  // }
  success = false;

  sendReset() {
    if (!this.email) {
      alert('Please enter your email.');
      return;
    }

    this.authFacade.forgotPassword(this.email).subscribe({
      next: () => {
        this.success = true;
        setTimeout(() => (this.success = false), 5000);
      },
      error: () => alert('Something went wrong. Please try again.')
    });
}

}
