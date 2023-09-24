import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
} from '@ng-bootstrap/ng-bootstrap';
import { MeetingFormComponent } from './meeting-form.component';

@NgModule({
  declarations: [MeetingFormComponent],
  imports: [
    DatePipe,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
  ],
  exports: [MeetingFormComponent],
})
export class MeetingFormModule {}
