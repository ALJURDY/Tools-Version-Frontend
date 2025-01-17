import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loginUrl = 'http://localhost:8080/api/v1/auth/authenticate';
  private registerUrl = 'http://localhost:8080/api/v1/auth/register';

  constructor(private http: HttpClient) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials, { observe: 'response' });
  }

  register(user: User): Observable<Token> {
    return this.http.post<Token>(this.registerUrl, user);
  }

  logout() {
    localStorage.removeItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) {
      return true;
    }
  
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
}
