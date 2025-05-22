import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-rent-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './rent-payment.component.html'
})
export class RentPaymentComponent implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  rentForm = this.fb.group({
    amount: [0, [Validators.required, Validators.min(1)]],
    mode: ['PAYPAL', Validators.required],
    autoPayEnabled: [false]
  });

  payments: any[] = [];

  ngOnInit() {
    this.loadPayments();
  }

  loadPayments() {
    this.http.get<any[]>('/api/rent/my-payments').subscribe(data => {
      this.payments = data;
    });
  }

  submitForm() {
    if (this.rentForm.invalid) return;
    this.http.post('/api/rent/pay', this.rentForm.value)
      .pipe(catchError(err => {
        console.error(err);
        return of(null);
      }))
      .subscribe(response => {
        if (response) {
          this.loadPayments();
          this.rentForm.reset({ amount: 0, mode: 'PAYPAL', autoPayEnabled: false });
        }
      });
  }
}
