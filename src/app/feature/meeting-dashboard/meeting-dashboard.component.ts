import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-dashboard',
  templateUrl: './meeting-dashboard.component.html',
  styleUrls: ['./meeting-dashboard.component.scss'],
})
export class MeetingDashboardComponent {
  constructor(private router: Router) {}

  onForgotPasswordClick() {
    void this.router.navigate(['/forgot-password']);
  }

  onCreateAccountClick() {
    void this.router.navigate(['/create-account']);
  }
}
