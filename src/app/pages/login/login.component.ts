import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  login() {
    this.authenticationService.login({ email: this.email, password: this.password })
      .subscribe(response => {
        const token = response.body.access_token;
        if (token) {
          this.authenticationService.setToken(token);
          this.router.navigate(['/home']);
        }
      }, error => {
        console.error('Login failed', error);
      });
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}
