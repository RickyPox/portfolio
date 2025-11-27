"use client";
import { useLanguage } from "@/context/LanguageContext";
import { projectsByLang } from "@/data/projects/index";
import gsap from "gsap";
import { title } from "process";
import { useEffect, useRef, useState } from "react";

export default function ProjectsPage() {
    const dict = useLanguage();

    const titleRef = useRef<HTMLParagraphElement | null>(null);

    const projects = projectsByLang[dict.lang as keyof typeof projectsByLang] || projectsByLang["en"];

    const [hovered, setHovered] = useState<{ id: number; x: number; y: number } | null>(null);
    const [prevHoveredId, setPrevHoveredId] = useState<number | null>(null);

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

        setPrevHoveredId(leavingId);

        gsap.to(titleRef.current, {
            opacity: 0,
            x: -50,
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
                if (hoveredRef.current?.id === leavingId) {
                    setHovered(null);
                }
                console.log("Animation Completed: ", "Hovered: " + hoveredRef.current?.id, "Prev Hovered: " + leavingId);
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
            <img src="/Projects.jpg" className="w-screen h-screen fixed -z-10"></img>
            <div className="content-container flex-col gap-y-[40px]">
                <h1>{dict.projects.title}</h1>
                <div className="grid grid-cols-4 gap-[20px]">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="col-span-1 aspect-video"
                            onMouseEnter={(e) => handleMouseEnter(project.id, e)}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={() => handleMouseLeave(project.id)}
                            style={{ cursor: hovered?.id === project.id ? "none" : "default" }}
                        >
                            <div className="bg-amber-50 w-full h-full" />
                            {hovered?.id === project.id && (
                                <p
                                    ref={titleRef}
                                    className="absolute font-[Staatliches]! pointer-events-none "
                                    style={{
                                        left: hovered.x,
                                        top: hovered.y,
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
    );
}
