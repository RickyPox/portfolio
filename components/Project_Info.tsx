import { projectsByLang } from "@/data/projects/index";
import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "./Button";
import { useRef } from "react";

export default function ProjectInfo({
    id,
    onClose,
    backgroundRenderChange,
}: {
    id: number;
    onClose: () => void;
    backgroundRenderChange: () => void;
}) {
    const dict = useLanguage();
    const projects = projectsByLang[dict.lang as keyof typeof projectsByLang] || projectsByLang["en"];
    const project = projects.find((p) => p.id === id);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const modal = document.getElementById("project-info");
        modal?.classList.add("overflow-hidden");
        modal?.classList.add("absolute");
        const tl = gsap.timeline({
            onComplete: () => {
                modal?.classList.remove("overflow-hidden");
                modal?.classList.remove("absolute");
                modal?.classList.add("overflow-visible");
                backgroundRenderChange();
            },
        });

        if (backgroundRef.current) {
            tl.fromTo(
                backgroundRef.current.children,
                { y: "-100%" },
                {
                    y: "0%",
                    duration: 0.3,
                    ease: "power2.inOut",
                    stagger: { from: "edges", each: 0.12 },
                }
            );
        }

        if (containerRef.current) {
            tl.fromTo(
                containerRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out",
                }
            );
        }
    }, [id]);

    const handleExit = () => {
        backgroundRenderChange();
        const modal = document.getElementById("project-info");

        modal?.classList.add("absolute");
        modal?.classList.remove("overflow-visible");
        modal?.classList.add("overflow-hidden");
        const tl = gsap.timeline({
            onComplete: () => {
                modal?.classList.remove("overflow-hidden");
                modal?.classList.add("overflow-visible");
                modal?.classList.remove("absolute");
                onClose();
            },
        });
        tl.to(".content-container", {
            opacity: 0,
            y: 50,
            duration: 0.3,
            ease: "power2.in",
        });
        tl.to(".background div", {
            y: "-100%",
            duration: 0.3,
            ease: "power2.inOut",
            stagger: { from: "edges", each: 0.12 },
        });
    };

    if (!project) {
        return <div>{dict.projectError}</div>;
    }
    return (
        <div className="relative z-50">
            <section className="z-10 h-auto" id="project-info">
                <div className="">
                    <div className="fixed w-full " ref={backgroundRef}>
                        <div className="w-1/5 left-0 h-full fixed bg-[var(--secondary-color)]" />
                        <div className="w-1/5 left-1/5 h-full fixed bg-[var(--secondary-color)]" />
                        <div className="w-1/5 left-2/5 h-full fixed bg-[var(--secondary-color)]" />
                        <div className="w-1/5 left-3/5 h-full fixed bg-[var(--secondary-color)]" />
                        <div className="w-1/5 left-4/5 h-full fixed bg-[var(--secondary-color)]" />
                    </div>
                    <div className="content-container flex-col justify-between" ref={containerRef}>
                        <div className="relative flex flex-col gap-y-[20px] md:gap-y-0 md:flex-row-reverse md:justify-between md:items-center ">
                            <div className="flex gap-x-[20px]">
                                <div className="w-1/2 md:w-auto" onClick={() => handleExit()}>
                                    <Button className="w-full" title={dict.return} />
                                </div>
                                <div className="w-1/2 md:w-auto">
                                    <Button className="w-full" title={dict.live} href={project.projectUrl} />
                                </div>
                            </div>
                            <div>
                                <h1>{project.title}</h1>
                                <p>{project.date}</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-x-[20px] gap-y-[40px] mt-[80px]">
                            <img className="md:w-1/2" alt={project.title} src={project.imageUrl} />
                            <p className="md:w-1/2">{project.description}</p>
                        </div>
                        <div className="mt-[100px] ">
                            <h2 className="uppercase">- Tech Stack - </h2>
                            {project.technologies.map((tech, index) => (
                                <p key={index} className="inline-block mr-2 text-[16px]!">
                                    {tech}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
