"use client";

import About from "@/components/About";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import GetInTouch from "@/components/GetInTouch";
import ProjectInfo from "@/components/Project_Info";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
    const [isProjectOpen, setIsProjectOpen] = useState<boolean>(false);
    const landingRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    const handleProjectSelect = (projectId: number) => {
        setSelectedProjectId(projectId);
    };

    useGSAP(() => {
        const aboutHeight = aboutRef.current?.offsetHeight;
        const projectsHeight = projectsRef.current?.offsetHeight;
        const contactHeight = contactRef.current?.offsetHeight;

        gsap.fromTo(
            aboutRef.current,
            { y: aboutHeight ? -aboutHeight / 2 : 0 },
            {
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: landingRef.current,
                    start: "top top",
                    end: "bottom top",

                    scrub: 1,
                },
            }
        );
        gsap.fromTo(
            projectsRef.current,
            { y: 0 },
            {
                y: projectsHeight ? -projectsHeight / 2 : 0,
                ease: "none",
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: "top bottom",
                    end: "bottom bottom",

                    scrub: 1,
                },
            }
        );
        gsap.fromTo(
            contactRef.current,
            { marginTop: projectsHeight ? -projectsHeight : 0 },
            {
                marginTop: projectsHeight ? -projectsHeight / 2 : 0,
                ease: "none",
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: "bottom bottom",
                    end: "center top",
                    scrub: 1,

                    pinSpacing: false,
                },
            }
        );
    }, []);

    return (
        <div className="relative">
            {selectedProjectId !== null && (
                <ProjectInfo
                    id={selectedProjectId}
                    onClose={() => setSelectedProjectId(null)}
                    backgroundRenderChange={() => setIsProjectOpen(!isProjectOpen)}
                />
            )}

            {isProjectOpen === false && (
                <div className="relative ">
                    <section ref={landingRef} className="z-40 relative">
                        <Landing />
                    </section>
                    <section ref={aboutRef} className="z-20 relative">
                        <About />
                    </section>
                    <section ref={projectsRef} className="z-40 relative">
                        <Projects onProjectOpen={handleProjectSelect} />
                    </section>
                    <section ref={contactRef} className="z-30 relative">
                        <GetInTouch />
                    </section>
                </div>
            )}
        </div>
    );
}

{
}
