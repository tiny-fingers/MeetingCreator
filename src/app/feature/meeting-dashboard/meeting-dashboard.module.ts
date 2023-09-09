import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MeetingDashboardComponent} from "./meeting-dashboard.component";

@NgModule({
  declarations: [MeetingDashboardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [MeetingDashboardComponent],
})
export class MeetingDashBoardComponent {}
