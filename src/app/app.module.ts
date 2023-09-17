import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatePipe, NgIf, NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientFormModule } from './feature/clients/client-form/client-form.module';
import { ClientsModule } from './feature/clients/clients.module';
import { LandingModule } from './feature/landing/landing.module';
import { LoginModule } from './feature/login/login.module';
import { MeetingDashBoardModule } from './feature/meeting-dashboard/meeting-dashboard.module';
import { MeetingFormModule } from './feature/meeting-dashboard/meeting-form/meeting-form.module';
import { MeetingInfoModule } from './feature/meeting-dashboard/meeting-info/meeting-info.module';
import { AuthenticationService } from './shared/authentication/authentication.service';
import { ClientsService } from './shared/clients/clients.service';
import { MeetingsService } from './shared/meetings/meetings.service';
import { NavbarModule } from './shared/navigation/navbar.module';

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
    NavbarModule,
    MeetingInfoModule,
    MeetingFormModule,
    ReactiveFormsModule,
    ClientsModule,
    NgbCarouselModule,
    NgOptimizedImage,
    NgIf,
    NgbModule,
    ClientFormModule,
  ],
  providers: [AuthenticationService, DatePipe, MeetingsService, ClientsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
