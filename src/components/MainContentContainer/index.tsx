
import { HeaderMenu } from "./components/HeaderMenu";
import { Hero } from "./components/Hero";
import { MainContentContainer } from "./styles";

export function MainContainer(){
    return(
        <MainContentContainer>
            <HeaderMenu/>
            <Hero/>
        </MainContentContainer>
    )
}