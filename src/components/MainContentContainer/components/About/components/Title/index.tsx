import { Header } from "./styles";


interface TitleProps{
    icon?: React.ReactNode;
    sectionTitle: string
}

export function Title({icon, sectionTitle}: TitleProps){
    return(
        <Header>
            { icon && <i>{icon}</i>}
            <h1>{sectionTitle}</h1>
            <div></div>
        </Header>
    )
}