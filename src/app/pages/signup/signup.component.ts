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
  password: string = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  register() {
    this.authenticationService.register({ username: this.username, password: this.password })
      .subscribe(response => {
        this.router.navigate(['/login']);
      });
  }
}
