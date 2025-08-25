import { ContainerDate, ContainerEducation, Divider } from "./styles";


export function Education() {
    return (
        <ContainerEducation>
            <ul>
                <li>
                    <ContainerDate>
                        <h3>NOW</h3>
                        <Divider/>
                    </ContainerDate>

                    <div>
                        <p>Master of Information Technology</p>
                        <p>Kaplan Business Scholl - Australia</p>
                    </div>
                </li>
                <li>
                    <ContainerDate>
                    <h3>2024</h3>
                    <Divider/>
                    </ContainerDate>

                    <div>
                        <p>Bachelor’s Degree in Mobile App Development </p>
                        <p>AIT - Academy of Information Technology - Australia</p>
                    </div>
                </li>
                <li>
                    <ContainerDate>
                    <h3>2009</h3>
                    <Divider/>
                    </ContainerDate>

                    <div>
                        <p>Bachelor’s Degree in Advertisement and Communication</p>
                        <p>Universidade Anhembi Morumbi - Brazil</p>
                    </div>
                </li>
            </ul>
        </ContainerEducation>
    )
}