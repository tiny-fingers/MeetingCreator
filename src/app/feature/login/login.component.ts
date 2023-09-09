import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  _adminUser: string = 'admin';
  _adminPassword: string = 'admin';

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('Login submitted');
    if (
      this.loginForm.valid &&
      this.loginForm.value.username === this._adminUser &&
      this.loginForm.value.password === this._adminPassword
    ) {
      void this.router.navigate(['/meeting-dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

  onForgotPasswordClick() {
    alert('Feature not implemented');
    void this.router.navigate(['/forgot-password']);
  }

  onCreateAccountClick() {
    alert('Feature not implemented');
    void this.router.navigate(['/create-account']);
  }
}
