import { HeaderMenuContainer } from "./styles";
import { ListIcon } from "@phosphor-icons/react";

export function HeaderMenu(){
    return(
        <HeaderMenuContainer>
            <a href="">
                <ListIcon size={48} color="#0BAE4B"/>
            </a>
        </HeaderMenuContainer>
    )
}