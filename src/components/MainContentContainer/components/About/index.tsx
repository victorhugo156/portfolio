import { GraduationCapIcon, SuitcaseIcon } from "@phosphor-icons/react";
import { Title } from "../Title";
import { Container, ContainerAboutMe } from "./styles";
import { Experience } from "../Experience";
import { Education } from "../Education";


export function About() {
    return (
        <Container>
            <Title sectionTitle={"THIS IS ME"} />
            <ContainerAboutMe>
                <div>
                    <h3>Hi, I am Victor,</h3>
                </div>

                <div>
                    <p>
                        Passionate professional with experience in helping companies achieve optimal business objectives by
                        creating high-impact marketing strategies to drive pipeline, revenue, and growth. I am in the process
                        of transitioning my career to work as a Web Developer.
                        <br />
                        <br />
                        I have experience creating digital content for internal and external marketing campaigns, designing graphic
                        visuals for online and offline communications, building managerial reports based on marketing results from
                        Google AdWords and Analytics, and liaising with key stakeholders to deliver outstanding results within the
                        Information Technology and Insurance sector.
                    </p>
                </div>
            </ContainerAboutMe>

            <Title icon={<GraduationCapIcon size={32} color="#0BAE4B"/>} sectionTitle={"EDUCATION"} />
            <Education/>
            <Title icon={<SuitcaseIcon size={32} color="#0BAE4B"/>} sectionTitle={"EXPERIENCE"} />
            <Experience/>
        </Container>
    )
}