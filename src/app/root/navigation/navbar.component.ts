import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication/authentication.service";
import {NavItem} from "../../shared/types";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() showLoginButton: boolean = true;
  @Input() activeNavItem?: NavItem = undefined;
  constructor(protected authService: AuthenticationService) {}
  protected readonly NavItem = NavItem;

  onAboutClick() {
    alert('This is a demo application for the Simplilearn Angular course.');
  }

  setActive(activeItem: NavItem) {
    this.activeNavItem = activeItem;
  }
}
