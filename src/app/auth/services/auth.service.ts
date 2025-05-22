import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  login(data: { mobile: string; password: string }): Observable<any> {
  return this.http.post('http://localhost:8080/auth/login', data, { responseType: 'text' });
}

  register(data: { mobile: string; password: string; firstname: string; lastname: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  forgotPassword(data: { email: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/forgot-password`, data);
  }
}
