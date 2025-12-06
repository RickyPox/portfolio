"use client";

import About from "@/components/About";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import GetInTouch from "@/components/GetInTouch";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import { useLanguage } from "@/context/LanguageContext";
import ProjectInfo from "@/components/ProjectInfo";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    useGSAP(() => {
        const about = aboutRef.current;
        const projects = projectsRef.current;

        if (!about || !projects) return;

        const elHeight = projects.offsetHeight;

        gsap.timeline({
            scrollTrigger: {
                trigger: about,
                start: "bottom+=10% bottom",
                end: `+=${elHeight}`,
                scrub: true,
                pin: about,

                pinSpacing: false,
            },
        });
    }, []);

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
                <div className="relative">
                    <section ref={aboutRef} className="z-20 relative">
                        <About />
                    </section>

                    <section ref={projectsRef} className="z-40 relative ">
                        <Projects onProjectOpen={openProject} projects={projects} />
                    </section>
                </div>

                <section ref={contactRef} className="z-30 relative">
                    <GetInTouch />
                </section>
            </div>
        </div>
    );
}

{
}
