import { Injectable } from '@angular/core';
import { Meeting } from '../../root/model/Meeting';

@Injectable({
  providedIn: 'root',
})
export class MeetingsService {
  public static meetings: Meeting[] = [
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

  static getMeetings(): Meeting[] {
    return MeetingsService.meetings;
  }

  static addMeeting(newMeeting: Partial<Meeting>): Meeting[] {
    const meeting = {
      ...newMeeting,
      createdBy: 1,
      id: MeetingsService.meetings.length,
    } as Meeting;
    MeetingsService.meetings.push(meeting);
    return MeetingsService.getMeetings();
  }

  static deleteMeetingById(meetingId: number): Meeting[] {
    MeetingsService.meetings = MeetingsService.meetings.filter(
      (meeting) => meeting.id !== meetingId,
    );
    return MeetingsService.getMeetings();
  }

  static updateMeeting(meeting: Meeting): void {
    const index = MeetingsService.meetings.findIndex(
      (m) => m.id === meeting.id,
    );
    if (index !== -1) {
      MeetingsService.meetings[index] = meeting;
    }
  }
}
