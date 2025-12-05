"use client";

import About from "@/components/About";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import GetInTouch from "@/components/GetInTouch";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import ProjectInfo from "@/components/ProjectInfo";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const dict = useLanguage();

    const [isProjectOpen, setIsProjectOpen] = useState<boolean>(false);
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

    const landingRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);
    const projects = dict.projectsInfo;

    const closeProject = () => {
        setSelectedProjectId(null);
        setIsProjectOpen(false);
        document.body.classList.remove("overflow-hidden");
    };

    const openProject = (projectId: number) => {
        setIsProjectOpen(true);
        setSelectedProjectId(projectId);
        document.body.classList.add("overflow-hidden");
    };

    return (
        <div className="relative">
            {selectedProjectId && (
                <ProjectInfo
                    id={selectedProjectId}
                    onClose={() => closeProject()}
                    backgroundRenderChange={() => setIsProjectOpen(!isProjectOpen)}
                    projects={projects}
                />
            )}

            <div className="relative">
                <img src="/Landing.jpg" className="fixed z-20 w-screen h-screen" />
                <section ref={landingRef} className="z-40 relative">
                    <Landing />
                </section>
                <section ref={aboutRef} className="z-20 relative">
                    <About />
                </section>

                <section ref={projectsRef} className="z-40 relative">
                    <Projects onProjectOpen={openProject} projects={projects} />
                </section>

                <section ref={contactRef} className="z-30 relative">
                    <GetInTouch />
                </section>
            </div>
        </div>
    );
}

{
}
