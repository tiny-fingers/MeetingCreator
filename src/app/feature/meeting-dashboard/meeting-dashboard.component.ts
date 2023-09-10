import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../root/authentication/authentication.service";
import {NavItem} from "../../shared/types";

@Component({
  selector: 'app-meeting-dashboard',
  templateUrl: './meeting-dashboard.component.html',
  styleUrls: ['./meeting-dashboard.component.scss'],
})
export class MeetingDashboardComponent {
  constructor() {}

  protected readonly NavItem = NavItem;
}
