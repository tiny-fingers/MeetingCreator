import { DatePipe, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MeetingFormComponent } from './meeting-form.component';

@NgModule({
  declarations: [MeetingFormComponent],
  imports: [DatePipe, ReactiveFormsModule, NgIf],
  exports: [MeetingFormComponent],
})
export class MeetingFormModule {}
