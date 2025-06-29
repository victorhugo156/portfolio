import { HeaderMenuContainer } from "./styles";
import { ListIcon } from "@phosphor-icons/react";

export function HeaderMenu(){
    return(
        <HeaderMenuContainer>
            <a href="">
                <ListIcon size={48} color="green"/>
            </a>

        </HeaderMenuContainer>
    )
}