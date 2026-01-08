"use client";
import Button from "@/components/Button";
import { useLanguage } from "@/context/LanguageContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
gsap.registerPlugin(ScrollTrigger);

export default function Projects({ onProjectOpen, projects }: { onProjectOpen: (project: any) => void; projects: any[] }) {
    const dict = useLanguage();

    const titleRefs = useRef<{ [key: number]: HTMLParagraphElement | null }>({});
    const contentRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    const [marqueePlay, setMarqueePlay] = useState(false);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget.querySelector("p");
        if (!el) return;

        gsap.killTweensOf(el);
        gsap.fromTo(el, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget.querySelector("p");
        if (!el) return;

        gsap.killTweensOf(el);
        gsap.to(el, { x: 40, opacity: 0, duration: 0.25, ease: "power2.in" });
    };

    useGSAP(() => {
        const section = sectionRef.current;
        const content = contentRef.current;
        const projects = projectsRef.current;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                pin: true,
                start: "bottom bottom",
                end: "+=2000px",
                pinSpacing: true,
                scrub: 1,
            },
        });
        tl.fromTo(content, { y: "0%", opacity: 1 }, { y: "-100%", opacity: 0, ease: "power2.inOut" }, 0).to(
            content,
            { y: "-100%", ease: "power2.inOut" },
            0.3
        );
        tl.fromTo(
            projects,
            { x: "150%", y: "0%" },
            {
                x: "0%",
                scrollTrigger: {
                    trigger: section, // pode ser o mesmo trigger
                    start: "bottom bottom",
                    end: "+=1900px",

                    scrub: 1,

                    // ❗ importante: define a posição relativa na timeline
                    // para onde este tween termina
                    onLeave: () => setMarqueePlay(true), // quando PASSA o fim do tween
                    onEnterBack: () => setMarqueePlay(false), // quando volta ANTES do fim
                },
            },
            0.2
        )
            .to(
                projects,
                {
                    x: "0%",
                    y: "0%",
                },
                0.5
            )
            .fromTo(projects, { y: "0%", bottom: "0%" }, { y: "50%", bottom: "50%" }, 0.5)
            .to(
                projects,
                {
                    y: "50%",
                    bottom: "50%",
                },
                0.8
            );
    }, []);

    return (
        <div className="relative projects overflow-x-hidden flex flex-col" id="projects" ref={sectionRef}>
            <div className="content-container md:items-end items-center min-h-screen">
                <div className="flex md:flex-row flex-col gap-x-[40px] gap-y-[100px] justify-between">
                    <div className="flex flex-col gap-y-[30px] lg:w-1/3 md:w-1/2" ref={contentRef}>
                        <h1>{dict.projects.title}</h1>
                        <p>{dict.projects.description}</p>
                        <Button title={dict.projects.button} href={`${dict.lang}/projects`} />
                    </div>
                </div>
            </div>
            <div ref={projectsRef} className="w-full flex absolute bottom-0">
                <Marquee play={marqueePlay} speed={50} loop={0} autoFill>
                    <div className="gap-x-[50px] flex">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="aspect-video relative cursor-pointer "
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => onProjectOpen(project.id)}
                            >
                                <div className="bg-amber-50 w-[30vw] aspect-video" />
                                <p
                                    ref={(el) => {
                                        titleRefs.current[index] = el;
                                    }}
                                    className="absolute font-[Staatliches]! pointer-events-none"
                                    style={{
                                        left: 0,
                                        bottom: 0,
                                        padding: "10px",
                                        backgroundColor: "var(--secondary-color)",
                                        opacity: 0,
                                    }}
                                >
                                    {project.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
}
