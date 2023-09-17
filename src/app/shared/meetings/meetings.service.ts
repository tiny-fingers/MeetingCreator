import { Injectable } from '@angular/core';
import { Meeting } from '../../root/model/Meeting';

@Injectable({
  providedIn: 'root',
})
export class MeetingsService {
  private meetings: Meeting[] = [
    {
      id: 1,
      title: 'Kickoff',
      description: 'Kickoff meeting',
      startTime: new Date(2023, 9, 15, 10, 0),
      endTime: new Date(2023, 9, 15, 11, 0),
      remote: false,
      createdBy: 1,
      attendees: [],
    },
    {
      id: 2,
      title: 'Revise',
      description: 'Revise details of project',
      startTime: new Date(2023, 9, 30, 10, 0),
      endTime: new Date(2023, 9, 15, 11, 0),
      remote: true,
      createdBy: 1,
      attendees: [],
    },
    {
      id: 3,
      title: 'Brainstorm',
      description: 'Brain storm ideas for MVP Q3 2023',
      startTime: new Date(2023, 9, 20, 10, 0),
      endTime: new Date(2023, 9, 20, 11, 0),
      remote: true,
      createdBy: 1,
      attendees: [],
    },
    {
      id: 4,
      title: 'Team dinner',
      description: 'Build team spirit',
      startTime: new Date(2023, 12, 20, 19, 0),
      endTime: new Date(2023, 12, 20, 22, 0),
      remote: false,
      createdBy: 1,
      attendees: [],
    },
  ];

  getMeetings(): Meeting[] {
    return this.meetings;
  }

  addMeeting(newMeeting: Partial<Meeting>): Meeting[] {
    const meeting = {
      ...newMeeting,
      createdBy: 1,
      id: this.meetings.length,
    } as Meeting;
    this.meetings.push(meeting);
    return this.meetings;
  }

  deleteMeetingById(meetingId: number): Meeting[] {
    this.meetings = this.meetings.filter((meeting) => meeting.id !== meetingId);
    return this.meetings;
  }

  updateMeeting(meeting: Meeting): void {
    const index = this.meetings.findIndex((m) => m.id === meeting.id);
    if (index !== -1) {
      this.meetings[index] = meeting;
    }
  }
}
