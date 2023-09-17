import { Client } from './Client';

export interface Meeting {
  id: number;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  location?: string;
  remote: boolean;
  createdBy: number;
  attendees: Client[];
}
