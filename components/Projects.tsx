"use client";
import Button from "@/components/Button";
import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { useRef } from "react";

export default function Projects({ onProjectOpen, projects }: { onProjectOpen: (project: any) => void; projects: any[] }) {
    const dict = useLanguage();

    const titleRefs = useRef<{ [key: number]: HTMLParagraphElement | null }>({});

    const handleMouseEnter = (id: number) => {
        const el = titleRefs.current[id];
        if (!el) return;

        gsap.killTweensOf(el);
        gsap.fromTo(el, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = (id: number) => {
        const el = titleRefs.current[id];
        if (!el) return;

        gsap.killTweensOf(el);
        gsap.to(el, {
            x: 40,
            opacity: 0,
            duration: 0.25,
            ease: "power2.in",
        });
    };

    return (
        <div className="relative projects" id="projects">
            <img src="/Projects.jpg" className="w-screen h-screen fixed -z-10" />
            <div className="content-container md:items-end items-center ">
                <div className="flex md:flex-row flex-col gap-x-[40px] gap-y-[100px] justify-between">
                    <div className="flex flex-col gap-y-[30px] lg:w-1/3 md:w-1/2">
                        <h1>{dict.projects.title}</h1>
                        <p>{dict.projects.description}</p>
                        <Button title={dict.projects.button} href={`${dict.lang}/projects`} />
                    </div>

                    <div className="grid grid-cols-2 gap-[20px] md:w-1/2">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="col-span-1 aspect-video relative cursor-pointer"
                                onMouseEnter={() => handleMouseEnter(project.id)}
                                onMouseLeave={() => handleMouseLeave(project.id)}
                                onClick={() => onProjectOpen(project.id)}
                            >
                                <div className="bg-amber-50 w-full h-full" />

                                <p
                                    ref={(el) => {
                                        titleRefs.current[project.id] = el;
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
                </div>
            </div>
        </div>
    );
}
