import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './feature/landing/landing.component';
import { LoginComponent } from './feature/login/login.component';
import { MeetingDashboardComponent } from './feature/meeting-dashboard/meeting-dashboard.component';
import { AuthenticationService } from './shared/authentication/authentication.service';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: MeetingDashboardComponent,
    canActivate: [AuthenticationService],
  },
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
