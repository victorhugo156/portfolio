import { ContainerProjects, ProjectDetailsContainer, ProjectImage } from "./styles";
import HairDresser from "../../../../assets/img/hair-dresser.png";
import { projects } from "../../../../data/projects";
import { ProjectDetails } from "./components/ProjectDetail";

export function Projects() {
    return (
        <ContainerProjects> 
            <ProjectDetailsContainer>
                {projects.map((project, i) => (
                <ProjectDetails
                key={project.id}
                project={project}
                index={i+1}
                />
                ))}
            </ProjectDetailsContainer>
            <ProjectImage>
                <img src={HairDresser} alt="Hair Dresser Project" />
            </ProjectImage>
        </ContainerProjects>
    )
}

                    // <ContainerDetails>
                    //     <div>
                    //         <p>{`0.${index}`}</p>
                    //     </div>
                    //     <div>
                    //         <h3>{project.title}</h3>
                    //         <ul>
                    //             {project.technologies.map((tech, idx) => (
                    //                 <li key={idx}>
                    //                     <p>{tech}</p>
                    //                     <div></div>
                    //                 </li>
                    //             ))}
                    //         </ul>
                    //     </div>
                    // </ContainerDetails>