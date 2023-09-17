import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meeting-info',
  templateUrl: './meeting-info.component.html',
  styleUrls: ['./meeting-info.component.scss'],
})
export class MeetingInfoComponent {
  @Input() title!: string;
  @Input() description?: string;
  @Input() startTime!: Date;
  @Input() endTime!: Date;
  @Input() remote!: Boolean;
  @Input() id!: number;

  @Output() deleteMeeting: EventEmitter<number> = new EventEmitter();

  constructor(private datePipe: DatePipe) {}

  closeMeetingInfo() {
    this.deleteMeeting.emit(this.id);
  }
}
