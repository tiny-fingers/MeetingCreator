export interface Client {
  id: number;
  name: string;
  description: string;
  contacts: Contact[];
}

export interface Contact {
  email: string;
}
