import { NgModule } from '@angular/core';

import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { NavbarModule } from '../../shared/navigation/navbar.module';
import { MeetingDashboardComponent } from './meeting-dashboard.component';
import { MeetingFormModule } from './meeting-form/meeting-form.module';
import { MeetingInfoModule } from './meeting-info/meeting-info.module';

@NgModule({
  declarations: [MeetingDashboardComponent],
  imports: [
    NavbarModule,
    NgForOf,
    DatePipe,
    MeetingInfoModule,
    MeetingFormModule,
    NgIf,
  ],
})
export class MeetingDashBoardModule {}
