
import { KanbanIcon } from "@phosphor-icons/react";
import { About } from "./components/About";
import { Title } from "./components/About/components/Title";
import { HeaderMenu } from "./components/HeaderMenu";
import { Hero } from "./components/Hero";
import { SkillSlider } from "./components/SkillSlider";
import { WrapperPortfolio, MainContentContainer, ContainerPortfolio } from "./styles";
import { Projects } from "./components/Projects";

export function MainContainer(){
    return(
        <MainContentContainer>
            <HeaderMenu/>
            <Hero/>
            <SkillSlider/>
            <About/>
            <WrapperPortfolio>
                <ContainerPortfolio>
                    <Title icon={<KanbanIcon size={32} color="#0BAE4B"/>} sectionTitle={"Projects"} />
                    <Projects/>
                </ContainerPortfolio>
            </WrapperPortfolio>
        </MainContentContainer>
    )
}