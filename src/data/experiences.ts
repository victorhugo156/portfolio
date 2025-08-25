// src/data/events.ts
export interface JobExperience {
  date: string;
  title: string;
  heading: string;
}

export const jobExperiences: JobExperience[] = [
  { title: "Print Force", date: "Apr 2021 – Current", heading: "Print Finisher"},
  { title: "Moyai – Accessibility Solutions App (Australia)", date: "Dec 2024 – Mar 2025", heading: "Flutter & Backend Development Intern"},
  { title: "FMW – Men’s Fashion Store", date: "Nov 2017 – Jan 2019", heading: "Graphic Designer & Social Media Content Creator"},
  { title: "Semmler Group (Insurance Company)", date: "Mar 2014 – Oct 2015",  heading: "Marketing Coordinator" },
  { title: "Atos", date: "Jan 2007 – Oct 2013",  heading: "Marketing Analyst"},
];
