import { ContainerProjects, ProjectDetailsContainer } from "./styles";
// import HairDresser from "../../../../assets/img/hair-dresser.png";
import { projects } from "../../../../data/projects";
import { ProjectDetails } from "./components/ProjectDetail";
import { useState } from "react";

export function Projects() {

    const [hoveredIdx, setHoveredIdx] = useState<number|null>(null)
    
    return (
        <ContainerProjects> 
            <ProjectDetailsContainer>
                {projects.map((project, i) => (
                <ProjectDetails
                key={project.id}
                project={project}
                index={i+1}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                visible={hoveredIdx === i} 
                />
                ))}
            </ProjectDetailsContainer>
            {/* <ProjectImage visible={hoveredIdx !== null}>
                {
                    hoveredIdx !== null && (
                    <img src={HairDresser} alt="Hair Dresser Project" />
                    )
                }
                
            </ProjectImage> */}
        </ContainerProjects>
    )
}