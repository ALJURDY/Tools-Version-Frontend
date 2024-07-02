import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  login() {
    this.authenticationService.login({ username: this.username, password: this.password })
      .subscribe(response => {
        if (response.status === 200) {
          // login
          this.router.navigate(['/home']);
        }
      });
  }
}
