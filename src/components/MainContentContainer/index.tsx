
import { About } from "./components/About";
import { HeaderMenu } from "./components/HeaderMenu";
import { Hero } from "./components/Hero";
import { SkillSlider } from "./components/SkillSlider";
import { MainContentContainer } from "./styles";

export function MainContainer(){
    return(
        <MainContentContainer>
            <HeaderMenu/>
            <Hero/>
            <SkillSlider/>
            <About/>
        </MainContentContainer>
    )
}