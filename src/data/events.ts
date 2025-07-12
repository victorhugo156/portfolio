// src/data/events.ts
export interface Event {
  date: string;
  title: string;
  heading: string;
  description: string;
}

export const events: Event[] = [
  { title: "Mother’s Birthday", date: "10 Feb", heading: "Day you've been waiting for", description: "Her special day..." },
  { title: "Graduation",      date: "20 Jun",  heading: "Day you've been waiting for",description: "Finished university..." },
  { title: "First Job",       date: "01 Sep",  heading: "Day you've been waiting for", description: "Started career..." },
  // …add as many as you like
];
