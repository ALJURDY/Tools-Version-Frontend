import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loginUrl = 'http://localhost:8080/login';
  private registerUrl = 'http://localhost:8080/api/user/register';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials, { observe: 'response' });
  }

  register(user: { username: string, password: string }): Observable<any> {
    return this.http.post(this.registerUrl, user);
  }

  logout() {
    // Logout logic
  }
}
