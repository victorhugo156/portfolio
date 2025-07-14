import { ContainerProjects, ProjectDetails, ProjectImage } from "./styles";
import HairDresser from "../../../../assets/img/hair-dresser.png";


export function Projects() {
    return(
        <ContainerProjects>
            <ProjectDetails>
                <div>
                    <p>0.1</p>
                </div>
                <div>
                    <h3>HAIR DRESSER</h3>
                    <ul>
                        <li>
                            <p>HTML</p>
                            <div></div>
                        </li>
                        <li>
                            <p>CSS</p>
                            <div></div>
                        </li>
                        <li>
                            <p>JS</p>
                        </li>
                    </ul>
                </div>
            </ProjectDetails>
            <ProjectImage>
                <img src={HairDresser}alt="Hair Dresser Project" />
            </ProjectImage>
        </ContainerProjects>
    )
}