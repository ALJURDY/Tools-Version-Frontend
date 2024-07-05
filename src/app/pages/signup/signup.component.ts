import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  register() {
    this.authenticationService.register({
       username: this.username,
       userEmail: this.email,
        password: this.password,
        role: 'USER'
       })
      .subscribe(response =>  {
        const token = response.access_token;
        if (token) {
          this.authenticationService.setToken(token);
          this.router.navigate(['/home']);
        }
      });
  }
}
