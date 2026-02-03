export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  overview: string;
  fullDescription: string;
  coordinator?: {
    name: string;
    email: string;
    phone?: string;
  };
  image?: string;
  registrationLink?: string;
}
