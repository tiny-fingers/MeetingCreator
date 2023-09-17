import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meeting } from '../../../root/model/Meeting';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.scss'],
})
export class MeetingFormComponent {
  @Output() addMeeting: EventEmitter<Partial<Meeting>> = new EventEmitter();
  meetingFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.meetingFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      remote: [true],
    });
  }

  onSubmit() {
    if (this.meetingFormGroup.valid) {
      this.addMeeting.emit(this.meetingFormGroup.value);
      this.meetingFormGroup.reset();
    }
  }
}
