import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './feature/login/login.module';
import {NavbarComponent} from "./root/navigation/navbar.component";
import {AuthenticationService} from "./root/authentication/authentication.service";
import {NavbarModule} from "./root/navigation/navbar.module";
import {MeetingDashBoardModule} from "./feature/meeting-dashboard/meeting-dashboard.module";
import {LandingModule} from "./feature/landing/landing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    MeetingDashBoardModule,
    LandingModule,
    NavbarModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
