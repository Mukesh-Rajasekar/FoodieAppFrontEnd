import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router, private logInServ: LoginService) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }

  logOut() {
    this.logInServ.logout();
    this.router.navigate(['/home']);
  }

  isUserLoggedIn(): boolean {
    return this.logInServ.isLoggedIn();
  }
}
