import { SidebarMenu } from "./styles";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react";
import GitHubLogo from "../../assets/img/github.svg";
import LinkedinLogo from "../../assets/img/linkedin.svg";

export function Sidebar() {
    return (
        <SidebarMenu>
            <nav>
                <a href="">
                    <EnvelopeSimpleIcon size={32}  color=""/>
                </a>
                <a href="">
                    <img src={GitHubLogo} alt="" />
                </a>
                <a href="">
                    <img src={LinkedinLogo} alt="" />
                </a>
            </nav>
            <div></div>
        </SidebarMenu>
    )
}