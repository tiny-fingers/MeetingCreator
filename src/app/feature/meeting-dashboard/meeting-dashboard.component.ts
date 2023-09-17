import { Component } from '@angular/core';
import { Meeting } from '../../root/model/Meeting';
import { MeetingsService } from '../../shared/meetings/meetings.service';
import { NavItem } from '../../shared/types';

@Component({
  selector: 'app-meeting-dashboard',
  templateUrl: './meeting-dashboard.component.html',
  styleUrls: ['./meeting-dashboard.component.scss'],
})
export class MeetingDashboardComponent {
  meetings: Meeting[] = [];

  alertMeetingAdded: boolean = false;

  constructor() {}

  ngOnInit() {
    this.meetings = MeetingsService.getMeetings().sort((a, b) => {
      return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
    });
  }

  protected readonly NavItem = NavItem;

  private hideAlert() {
    this.alertMeetingAdded = false;
  }

  protected onAddMeeting(newMeeting: Partial<Meeting>) {
    this.meetings = MeetingsService.addMeeting(newMeeting).sort((a, b) => {
      return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
    });

    this.alertMeetingAdded = true;
    setTimeout(() => {
      this.hideAlert();
    }, 3000);
  }

  protected onDeleteMeeting(meetingId: number) {
    if (confirm('Are you sure that you want to delete this meeting?')) {
      this.meetings = MeetingsService.deleteMeetingById(meetingId);
    }
  }
}
