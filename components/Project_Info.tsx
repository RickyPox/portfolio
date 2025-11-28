import { projectsByLang } from "@/data/projects/index";
import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "./Button";

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

    useGSAP(() => {
        const modal = document.getElementById("project-info");
        modal?.classList.add("overflow-hidden");
        const tl = gsap.timeline({
            onComplete: () => {
                modal?.classList.remove("overflow-hidden");
                modal?.classList.add("overflow-visible");
                backgroundRenderChange();
            },
        });

        // anima cada coluna uma de cada vez
        tl.fromTo(
            ".background div",
            { y: "-100%" },
            {
                y: "0%",
                duration: 0.5,
                ease: "power2.inOut",
                stagger: { from: "edges", each: 0.3 }, // intervalo entre cada animação
            }
        );

        tl.fromTo(
            ".content-container",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
            }
        );
    });

    const handleExit = () => {
        backgroundRenderChange();
        const modal = document.getElementById("project-info");
        modal?.classList.remove("overflow-visible");
        modal?.classList.add("overflow-hidden");
        const tl = gsap.timeline({
            onComplete: () => {
                modal?.classList.remove("overflow-hidden");
                modal?.classList.add("overflow-visible");
                onClose();
            },
        });
        tl.to(".content-container", {
            opacity: 0,
            y: 50,
            duration: 0.5,
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
        <>
            <section className="absolute top-0 left-0 w-screen z-10" id="project-info">
                <div className="flex-1">
                    <div className="relative w-full h-full background">
                        <div className="w-1/5 left-0 h-full absolute bg-[var(--secondary-color)]" />
                        <div className="w-1/5 left-1/5 h-full absolute bg-[var(--secondary-color)]" />
                        <div className="w-1/5 left-2/5 h-full absolute bg-[var(--secondary-color)]" />
                        <div className="w-1/5 left-3/5 h-full absolute bg-[var(--secondary-color)]" />
                        <div className="w-1/5 left-4/5 h-full absolute bg-[var(--secondary-color)]" />
                    </div>
                    <div className="content-container flex-col justify-between absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                            <div className="flex justify-between gap-x-[40px] items-center">
                                <h1>{project.title}</h1>
                                <div onClick={() => handleExit()}>
                                    <Button title={dict.return} />
                                </div>
                            </div>
                            <p>{project.date}</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-x-[20px]">
                            <img className="md:w-1/2" alt={project.title} src={project.imageUrl} />
                            <p className="md:w-1/2">{project.description}</p>
                        </div>
                        <div className="">
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
        </>
    );
}
