import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPassword = false;
  isForgotPassword = false;



  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleForgotPassword(event: Event) {
    event.preventDefault();
    this.isForgotPassword = !this.isForgotPassword;
  }








}
