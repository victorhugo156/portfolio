import { Button, ContainerCallToActions, ContainerDetails, ContainerIndex, ContainerProjectDescription, ProjectImage, WrapperDetails } from "./styles";
import type { Project } from "../../../../../../data/projects";
import { GithubLogoIcon } from "@phosphor-icons/react";

interface Props {
    project: Project;
    index: number;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    visible: boolean;
}

export function ProjectDetails({ project, index, onMouseEnter, onMouseLeave, visible }: Props) {
    return (
        <ContainerDetails onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <ContainerIndex>
                <p>{`0.${index}`}</p>
            </ContainerIndex>
            <WrapperDetails>
                <h3>{project.title}</h3>
                <ul>
                    {project.technologies.map((tech) => {
                        return (
                            <li key={tech}>
                                <p>{tech}</p>
                                <div></div>
                            </li>
                        )
                    })}
                </ul>
                <ContainerProjectDescription>
                    <p>{project.description}</p>
                </ContainerProjectDescription>
                <ContainerCallToActions>
                    <Button>
                        <a href={project.repoUrl}>
                            <GithubLogoIcon size={22} color="white" />
                        </a>
                    </Button>
                    <Button>
                        <a href={project.liveUrl}>View</a>
                    </Button>
                </ContainerCallToActions>
            </WrapperDetails>

            <ProjectImage visible={visible}>
                    <img src={project.image} alt="Hair Dresser Project" />
            </ProjectImage>
        </ContainerDetails>
    )
}