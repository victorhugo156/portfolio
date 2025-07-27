// src/data/events.ts

export interface Project {
  id: string;                
  title: string;
  technologies: string[];
  image: string;              
  liveUrl?: string;           
  repoUrl?: string;          
}

export const projects: Project[] = [
  {
    id: "hair-dresser",
    title: "Hair Dresser",
    technologies: ["HTML", "CSS", "JS"],
    image: "/images/hairdresser.png",
    liveUrl: "https://your-live-site.com",
    repoUrl: "https://github.com/you/hairdresser",
  },
  {
    id: "testing-1",
    title: "Testing 1",
    technologies: ["HTML", "CSS", "JS", "Flutter", "Node"],
    image: "/images/testing-1.png",
    liveUrl: "https://your-live-site.com",
    repoUrl: "https://github.com/you/hairdresser",
  },
  {
    id: "testing-2",
    title: "Testing 2",
    technologies: ["React Native", "styled-components", "Node"],
    image: "/images/testing-2.png",
    liveUrl: "https://your-live-site.com",
    repoUrl: "https://github.com/you/hairdresser",
  },
];

