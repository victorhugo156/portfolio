// src/data/events.ts

import hairDresserImg from "../assets/img/hair-dresser.png"


export interface Project {
  id: string;                
  title: string;
  description: string,
  technologies: string[];
  image: string;              
  liveUrl?: string;           
  repoUrl?: string;          
}

export const projects: Project[] = [
  {
    id: "hair-dresser",
    title: "Hair Dresser",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vitae similique commodi, vero cumque quasi ullam ducimus voluptatibus ratione fugiat et aliquid sint magnamdolore illo enim maiores nisi possimus.",
    technologies: ["HTML", "CSS", "JS"],
    image: hairDresserImg,
    liveUrl: "https://your-live-site.com",
    repoUrl: "https://github.com/you/hairdresser",
  },
  {
    id: "testing-1",
    title: "Testing 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vitae similique commodi, vero cumque quasi ullam ducimus voluptatibus ratione fugiat et aliquid sint magnamdolore illo enim maiores nisi possimus.",
    technologies: ["HTML", "CSS", "JS", "Flutter", "Node"],
    image: hairDresserImg,
    liveUrl: "https://your-live-site.com",
    repoUrl: "https://github.com/you/hairdresser",
  },
  {
    id: "testing-2",
    title: "Testing 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vitae similique commodi, vero cumque quasi ullam ducimus voluptatibus ratione fugiat et aliquid sint magnamdolore illo enim maiores nisi possimus.",
    technologies: ["React Native", "styled-components", "Node"],
    image: hairDresserImg,
    liveUrl: "https://your-live-site.com",
    repoUrl: "https://github.com/you/hairdresser",
  },
];

