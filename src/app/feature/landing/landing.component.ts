import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../root/authentication/authentication.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(private router: Router, protected authService: AuthenticationService) {
      if (this.authService.isAuthenticated()) {
          void this.router.navigate(['/']);
      }
  }

  onSignInCLick() {
    void this.router.navigate(['/login']);
  }
}
