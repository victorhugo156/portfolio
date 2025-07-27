import { ContainerExternalLinks, ContainerFooter, ContainerFooterContact, ExternalLink } from "./styles";
import Arrow from "../../../../assets/img/arrow.png"
import Resume from "../../../../assets/img/Victor_Hugo-Resume-Generic-new.pdf"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FooterDisplay {
    footerVisible: boolean
}

export function Footer({footerVisible}:FooterDisplay) {
    return (
        <ContainerFooter visible={footerVisible} >
            <h1>Say Hello.</h1>
            <ContainerFooterContact>
                <ContainerExternalLinks>
                    <ExternalLink href="https://github.com/victorhugo156" target="blank">
                        <p>GitHub</p>
                        <img src={Arrow} alt="" />
                    </ExternalLink>
                    <ExternalLink href="www.linkedin.com/in/victorhugosoliveira" target="blank">
                        <p>LinkedIn</p>
                        <img src={Arrow} alt="" />
                    </ExternalLink>
                    <ExternalLink href={Resume} download="Victor.Resume.pdf" >
                        <p>Download <strong>Resume</strong></p>
                        <img src={Arrow} alt="" />
                    </ExternalLink>
                </ContainerExternalLinks>
                <p>victorhugo156@gmail.com</p>
            </ContainerFooterContact>
        </ContainerFooter>
    )
}