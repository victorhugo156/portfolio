import { Banner, ContainerHero, WrapperJobName, WrapperName } from "./styles";

export function Hero() {
    return (
        <Banner>
            <ContainerHero>
                <WrapperName>
                    <h1>VICTOR</h1>
                    <h1>HUGO</h1>
                </WrapperName>
                <WrapperJobName>
                    <div></div>
                    <p>web developer</p>
                    <div></div>
                </WrapperJobName>
            </ContainerHero>
        </Banner>
    )
}