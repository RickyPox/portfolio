"use client";
import Button from "@/components/Button";
import ProjectInfo from "@/components/ProjectInfo";
import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Projects({ onProjectOpen, projects }: { onProjectOpen: (project: any) => void; projects: any[] }) {
    const dict = useLanguage();

    const titleRef = useRef<HTMLParagraphElement | null>(null);

    const [hovered, setHovered] = useState<number | null>(null);

    const handleMouseEnter = (id: number) => {
        setHovered(id);
    };

    const handleMouseLeave = (id: number) => {};

    return (
        <div className="projects relative " id="projects">
            <img src="/Projects.jpg" className="w-screen h-screen fixed -z-10"></img>
            <div className="content-container md:items-end items-center justify-between">
                <div className="flex md:flex-row flex-col gap-x-[40px] gap-y-[100px]">
                    <div className="flex flex-col gap-y-[30px] md:w-1/2">
                        <h1>{dict.projects.title}</h1>
                        <p>{dict.projects.description}</p>
                        <Button title={dict.projects.button} href={`${dict.lang}/projects`} />
                    </div>

                    <div className="grid grid-cols-2 gap-[20px] md:w-1/2">
                        {projects.map((project: any) => (
                            <div key={project.id} className="col-span-1 aspect-video relative" onClick={() => onProjectOpen(project.id)}>
                                <div className="bg-amber-50 w-full h-full" />

                                <p
                                    ref={titleRef}
                                    className="absolute font-[Staatliches]! pointer-events-none "
                                    style={{
                                        left: 0,
                                        bottom: 0,

                                        backgroundColor: "var(--secondary-color)",

                                        padding: "10px",
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
