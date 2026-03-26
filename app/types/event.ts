export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  seats: number;
}

export interface Registration {
  id: string;
  eventId: number;
  eventName: string;
  name: string;
  email: string;
  phone: string;
  registeredAt: string;
}
