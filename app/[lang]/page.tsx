"use client";

import About from "@/components/About";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import GetInTouch from "@/components/GetInTouch";
import ProjectInfo from "@/components/ProjectInfo";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const dict = useLanguage();

    const [isProjectOpen, setIsProjectOpen] = useState<boolean>(false);

    const landingRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);
    const projects = dict.projectsInfo;

    return (
        <div className="relative ">
            {!isProjectOpen && (
                <section ref={landingRef} className="z-40 relative">
                    <Landing />
                </section>
            )}
            {!isProjectOpen && (
                <section ref={aboutRef} className="z-20 relative">
                    <About />
                </section>
            )}
            <section ref={projectsRef} className="z-40 relative">
                <Projects onProjectOpen={() => setIsProjectOpen(!isProjectOpen)} projects={projects} />
            </section>
            {!isProjectOpen && (
                <section ref={contactRef} className="z-30 relative">
                    <GetInTouch />
                </section>
            )}
        </div>
    );
}

{
}
