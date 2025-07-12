
import { SlideItem, SLiderTrack, SliderWrapper } from "./styles"

import figma from "../../../../assets/icons/figma.png"
import css from "../../../../assets/icons/css3.png"
import html from "../../../../assets/icons/html.png"
import illustrator from "../../../../assets/icons/adobeillustrator.svg"
import photoshop from "../../../../assets/icons/adobephotoshop.svg"
import java from "../../../../assets/icons/java.png"
import javascript from "../../../../assets/icons/javascript-white-bg.png"
import react from "../../../../assets/icons/react.png"
import typescript from "../../../../assets/icons/typescript.png"    
import node from "../../../../assets/icons/nodejs.png"
import flutter from "../../../../assets/icons/flutter.png"


export function SkillSlider() {
    return(
        <SliderWrapper>
            <SLiderTrack>
                {[...Array(2)].flatMap((_,i)=>(
                    [
                        <SlideItem key={`figma-${i}`}><img src={figma} alt="figma" /></SlideItem>,
                        <SlideItem key={`css-${i}`}><img src={css} alt="figma" /></SlideItem>,
                        <SlideItem key={`html-${i}`}><img src={html} alt="figma" /></SlideItem>,
                        <SlideItem key={`java-${i}`}><img src={java} alt="figma" /></SlideItem>,
                        <SlideItem key={`javascript-${i}`}><img src={javascript} alt="figma" /></SlideItem>,
                        <SlideItem key={`flutter-${i}`}><img src={flutter} alt="flutter" /></SlideItem>,
                        <SlideItem key={`react-${i}`}><img src={react} alt="figma" /></SlideItem>,
                        <SlideItem key={`typescript-${i}`}><img src={typescript} alt="figma" /></SlideItem>,
                        <SlideItem key={`node-${i}`}><img src={node} alt="figma" /></SlideItem>,
                        <SlideItem key={`illustrator-${i}`}><img src={illustrator} alt="figma" /></SlideItem>,
                        <SlideItem key={`photoshop-${i}`}><img src={photoshop} alt="figma" /></SlideItem>,
                    ]

                ))}

            </SLiderTrack>
        </SliderWrapper>
    )

}