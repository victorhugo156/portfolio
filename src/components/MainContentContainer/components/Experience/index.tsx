import { Timeline } from "./components/TimeLine";
import { Container } from "./styles";
import { events } from "../../../../data/events";

export function Experience(){
    return(
        <Container>
            <Timeline events={events}/>
        </Container>
    )
}