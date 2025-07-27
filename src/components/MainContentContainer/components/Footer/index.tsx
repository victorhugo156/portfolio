import { ContainerExternalLinks, ContainerFooter, ContainerFooterContact, ExternalLink } from "./styles";
import Arrow from "../../../../assets/img/arrow.png"

export function Footer() {
    return (
        <ContainerFooter>
            <h1>Say Hello.</h1>
            <ContainerFooterContact>
                <ContainerExternalLinks>
                    <ExternalLink>
                        <p>GitHub</p>
                        <img src={Arrow} alt="" />
                    </ExternalLink>
                    <ExternalLink>
                        <p>GitHub</p>
                        <img src={Arrow} alt="" />
                    </ExternalLink>
                    <ExternalLink>
                        <p>GitHub</p>
                        <img src={Arrow} alt="" />
                    </ExternalLink>
                </ContainerExternalLinks>
                <p>victorhugo156@gmail.com</p>
            </ContainerFooterContact>
        </ContainerFooter>
    )
}