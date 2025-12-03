"use client";
import Button from "@/components/Button";
import ProjectInfo from "@/components/ProjectInfo";
import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function ProjectsPage() {
    const dict = useLanguage();
    const projects = dict.projectsInfo;
    const titleRef = useRef<HTMLParagraphElement | null>(null);

    const [hovered, setHovered] = useState<{ id: number; x: number; y: number } | null>(null);
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
    const [isProjectOpen, setIsProjectOpen] = useState<boolean>(false);

    const handleMouseEnter = (id: number, e: React.MouseEvent<HTMLDivElement>) => {
        setHovered({ id, x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (hovered) {
            setHovered((prev) => (prev ? { ...prev, x: e.clientX, y: e.clientY } : null));
        }
    };

    const hoveredRef = useRef<{ id: number; x: number; y: number } | null>(null);
    useEffect(() => {
        hoveredRef.current = hovered;
    }, [hovered]);

    const handleMouseLeave = (id: number) => {
        const leavingId = id;

        gsap.to(titleRef.current, {
            opacity: 0,
            x: -50,
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
                if (hoveredRef.current?.id === leavingId) {
                    setHovered(null);
                }
            },
        });
    };

    useEffect(() => {
        if (hovered?.id && titleRef.current) {
            gsap.fromTo(titleRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.3, ease: "power2.inOut" });
        }
    }, [hovered?.id]);

    return (
        <div className="relative">
            {selectedProjectId !== null && (
                <ProjectInfo
                    id={selectedProjectId}
                    onClose={() => setSelectedProjectId(null)}
                    backgroundRenderChange={() => setIsProjectOpen(!isProjectOpen)}
                    projects={projects}
                />
            )}
            {isProjectOpen === false && (
                <div className="relative">
                    <img src="/Projects.jpg" className="w-screen h-screen fixed -z-10"></img>
                    <div className="content-container flex-row gap-x-[40px]">
                        <div className="flex flex-col gap-y-[30px] w-1/2">
                            <h1>{dict.projects.title}</h1>
                            <p>{dict.projects.description}</p>
                            <Button title={dict.projects.button} href={`${dict.lang}/projects`} />
                        </div>
                        <div className="grid grid-cols-2 gap-[20px] w-1/2">
                            {projects.map((project: any) => (
                                <div
                                    key={project.id}
                                    className="col-span-1 aspect-video"
                                    onMouseEnter={(e) => handleMouseEnter(project.id, e)}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={() => handleMouseLeave(project.id)}
                                    style={{ cursor: hovered?.id === project.id ? "none" : "default" }}
                                    onClick={() => setSelectedProjectId(project.id)}
                                >
                                    <div className="bg-amber-50 w-full h-full" />
                                    {hovered?.id === project.id && selectedProjectId === null && (
                                        <p
                                            ref={titleRef}
                                            className="absolute font-[Staatliches]! pointer-events-none "
                                            style={{
                                                left: hovered?.x,
                                                top: hovered?.y,
                                                transform: "translate(-50%, -50%)",
                                                backgroundColor: "var(--secondary-color)",

                                                padding: "10px",
                                            }}
                                        >
                                            {project.title}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
