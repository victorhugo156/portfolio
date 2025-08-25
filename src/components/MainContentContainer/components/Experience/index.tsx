import { Timeline } from "./components/TimeLine";
import { Container, ContainerJobsExperience } from "./styles";
import { jobExperiences } from "../../../../data/experiences";

export function Experience(){
    return(
        <Container>
            <Timeline jobExperience={jobExperiences}/>
            <ul>
                {jobExperiences.map(job => (
                    <ContainerJobsExperience key={job.heading}>
                        <p>{job.title}</p>
                        <h2>{job.heading}</h2>
                        <p>{job.date}</p>
                    </ContainerJobsExperience>
                ))}
            </ul>
        </Container>
    )
}