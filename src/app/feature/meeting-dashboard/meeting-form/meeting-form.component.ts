import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../../root/model/Client';
import { Meeting } from '../../../root/model/Meeting';
import { ClientsService } from '../../../shared/clients/clients.service';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.scss'],
})
export class MeetingFormComponent {
  @Output() addMeeting: EventEmitter<Partial<Meeting>> = new EventEmitter();
  meetingFormGroup: FormGroup;
  clients: Client[] = [];
  selectedClient?: Client;

  constructor(private formBuilder: FormBuilder) {
    this.meetingFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startTime: [this.getDefaultStartTime(), Validators.required],
      endTime: [this.getDefaultEndTime(), Validators.required],
      remote: [true],
    });
    this.clients = ClientsService.getClients();
  }

  getDefaultStartTime() {
    let now = new Date();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    let defaultStartTime = new Date();
    if (minutes < 30) {
      defaultStartTime.setHours(hours);
      defaultStartTime.setMinutes(30);
    } else {
      defaultStartTime.setHours(hours++);
      defaultStartTime.setMinutes(0);
    }
    return defaultStartTime.toISOString().slice(0, 16);
  }

  getDefaultEndTime() {
    let now = new Date();
    let minutes = now.getMinutes();
    let hours = now.getHours() + 1;

    let defaultEndTime = new Date();
    if (minutes < 30) {
      defaultEndTime.setHours(hours);
      defaultEndTime.setMinutes(30);
    } else {
      defaultEndTime.setHours(hours++);
      defaultEndTime.setMinutes(0);
    }

    return defaultEndTime.toISOString().slice(0, 16);
  }

  onSubmit() {
    if (!this.selectedClient) {
      alert('Please select a client');
      return;
    }

    if (this.meetingFormGroup.valid) {
      const startTime = new Date(this.meetingFormGroup.get('startTime')?.value);
      const endTime = new Date(this.meetingFormGroup.get('endTime')?.value);

      if (startTime > endTime) {
        this.meetingFormGroup.controls['endTime'].markAsDirty();
        this.meetingFormGroup.controls['endTime'].setErrors({
          startTimeAfterEndTime: true,
        });
        return;
      }

      this.addMeeting.emit({
        ...this.meetingFormGroup.value,
        startTime: startTime,
        endTime: endTime,
        client: this.selectedClient,
      } as Meeting);
      this.meetingFormGroup.reset();
      this.meetingFormGroup
        .get('startTime')
        ?.setValue(this.getDefaultStartTime());
      this.meetingFormGroup.get('endTime')?.setValue(this.getDefaultEndTime());
    } else {
      this.meetingFormGroup.markAllAsTouched();
    }
  }

  selectClient(client: Client) {
    console.log('selected client: ', client);
    this.selectedClient = client;
  }
}
