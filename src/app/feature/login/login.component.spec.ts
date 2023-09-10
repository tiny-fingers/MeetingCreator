import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render username and password input fields', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#username')).toBeTruthy();
    expect(compiled.querySelector('#password')).toBeTruthy();
  });

  it('should render forgot password and create account links', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#forgot-password-btn')).toBeTruthy();
    expect(compiled.querySelector('#create-account-btn')).toBeTruthy();
  });
});
