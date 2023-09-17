import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeetingInfoComponent } from './meeting-info.component';

@NgModule({
  declarations: [MeetingInfoComponent],
  imports: [DatePipe],
  exports: [MeetingInfoComponent],
})
export class MeetingInfoModule {}
