import { Button, ContainerCallToActions, ContainerDetails, ContainerIndex, ContainerProjectDescription, WrapperDetails } from "./styles";
import type { Project } from "../../../../../../data/projects";
import { GithubLogoIcon } from "@phosphor-icons/react";

interface Props {
    project: Project;
    index: number;
}

export function ProjectDetails({ project, index }: Props) {
    return (
        <ContainerDetails>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Tempore vitae similique commodi, vero cumque quasi ullam 
                                    ducimus voluptatibus ratione fugiat et aliquid sint magnam 
                                    dolore illo enim maiores nisi possimus.</p>
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
        </ContainerDetails>
    )
}