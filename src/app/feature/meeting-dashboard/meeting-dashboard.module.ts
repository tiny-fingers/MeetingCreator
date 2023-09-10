import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MeetingDashboardComponent } from './meeting-dashboard.component';
import {NavbarModule} from "../../shared/navbar.module";

@NgModule({
  declarations: [MeetingDashboardComponent],
  imports: [NavbarModule],
})
export class MeetingDashBoardModule {}
