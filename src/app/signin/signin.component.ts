import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.scss']
})
export class SignInComponent {
  email: string;
  password: string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }
}