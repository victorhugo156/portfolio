
import React, { useRef, useLayoutEffect } from 'react'

import { KanbanIcon } from "@phosphor-icons/react";
import { About } from "./components/About";
import { Title } from "./components/About/components/Title";
import { HeaderMenu } from "./components/HeaderMenu";
import { Hero } from "./components/Hero";
import { SkillSlider } from "./components/SkillSlider";
import { WrapperProjects, MainContentContainer, ContainerProjects, FooterWrapper } from "./styles";
import { Projects } from "./components/Projects";

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Footer } from "./components/Footer";



gsap.registerPlugin(ScrollTrigger)

export function MainContainer() {
    const wrapper = useRef<HTMLDivElement>(null)
    const footer = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (!wrapper.current || !footer.current) return

        const footerHeight = footer.current.getBoundingClientRect().height;


        // create a pin on the footer as soon as your projects wrapper 
        // hits the bottom of the viewport
        ScrollTrigger.create({
            trigger: wrapper.current,
            start: 'bottom bottom',
            end: () => `bottom+=${footerHeight} top`, // <-- dynamic
            pin: footer.current,
            pinSpacing: true,
            scrub: true,
            // markers: true,
        })

        console.log(footerHeight)

        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])

    return (
        <>
            <MainContentContainer>
                <HeaderMenu />
                <Hero />
                <SkillSlider />
                <About />
                <WrapperProjects ref={wrapper}>
                    <ContainerProjects>
                        <Title icon={<KanbanIcon size={32} color="#0BAE4B" />} sectionTitle={"Projects"} />
                        <Projects />
                    </ContainerProjects>
                </WrapperProjects>
            </MainContentContainer>
            <FooterWrapper >
                <Footer />
                <div ref={footer}></div>
            </FooterWrapper >

        </>
    )
}