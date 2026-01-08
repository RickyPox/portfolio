import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "./Button";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function ProjectInfo({
    id,
    onClose,
    backgroundRenderChange,
    projects,
}: {
    id: number;
    onClose: () => void;
    backgroundRenderChange: () => void;
    projects: any[];
}) {
    const dict = useLanguage();
    const project = projects.find((p: any) => p.id === id);
    const backgroundRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                backgroundRenderChange();
            },
        });
        const split = new SplitText(".descriptionToAnimate", {
            type: "lines",
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

        tl.from(".buttonToAnimate", { scaleX: 0, duration: 0.3, ease: "power2.out", stagger: 0.1 })
            .from(".titleToAnimate", {
                scaleY: 0,
                duration: 0.3,
                ease: "power2.inOut",
                delay: -0.15,
            })
            .from(".dateToAnimate", { scaleX: 0, duration: 0.3, ease: "power2.inOut", delay: -0.2 })
            .from(".imgToAnimate", { scale: 0, opacity: 0, duration: 0.3, ease: "power2.inOut", delay: -0.2 })
            .from(split.lines, { opacity: 0, scaleY: 0, stagger: 0.1, duration: 0.3, ease: "power2.out", delay: -0.3 })
            .from(".techstackToAnimate h2", { x: -30, opacity: 0, duration: 0.3, ease: "power1.inOut", delay: -0.15 })
            .from(".techstackToAnimate p", { opacity: 0, duration: 0.5, stagger: 0.1, ease: "power2.inOut", delay: -0.2 });
    }, [id]);

    const handleExit = () => {
        backgroundRenderChange();
        const tl = gsap.timeline({
            onComplete: () => {
                onClose();
            },
        });
        const split = new SplitText(".descriptionToAnimate", {
            type: "lines",
        });

        tl.to(".buttonToAnimate", { scaleX: 0, duration: 0.3, ease: "power2.out", stagger: 0.1 })
            .to(".titleToAnimate", {
                scaleY: 0,
                duration: 0.3,
                ease: "power2.inOut",
                delay: -0.15,
            })
            .to(".dateToAnimate", { scaleX: 0, duration: 0.3, ease: "power2.inOut", delay: -0.2 })
            .to(".imgToAnimate", { scale: 0, opacity: 0, duration: 0.3, ease: "power2.inOut", delay: -0.2 })
            .to(split.lines, { opacity: 0, scaleY: 0, stagger: 0.1, duration: 0.3, ease: "power2.out", delay: -0.3 })
            .to(".techstackToAnimate h2", { x: -30, opacity: 0, duration: 0.3, ease: "power1.inOut", delay: -0.15 })
            .to(".techstackToAnimate p", { opacity: 0, duration: 0.5, stagger: 0.1, ease: "power2.inOut", delay: -0.2 });

        if (backgroundRef.current) {
            tl.to(backgroundRef.current.children, {
                y: "-100%",
                duration: 0.3,
                ease: "power2.inOut",
                stagger: { from: "edges", each: 0.12 },
            });
        }
    };

    if (!project) {
        return <div>{dict.projectError}</div>;
    }
    return (
        <section className="z-50 inset-0 fixed overflow-y-auto" id="project-info">
            <div className="fixed w-full " ref={backgroundRef}>
                <div className="w-1/5 left-0 h-full fixed bg-[var(--secondary-color)]" />
                <div className="w-1/5 left-1/5 h-full fixed bg-[var(--secondary-color)]" />
                <div className="w-1/5 left-2/5 h-full fixed bg-[var(--secondary-color)]" />
                <div className="w-1/5 left-3/5 h-full fixed bg-[var(--secondary-color)]" />
                <div className="w-1/5 left-4/5 h-full fixed bg-[var(--secondary-color)]" />
            </div>
            <div className="content-container flex-col justify-between z-40 relative">
                <div className="relative flex flex-col gap-y-[20px] md:gap-y-0 md:flex-row-reverse md:justify-between md:items-center ">
                    <div className="flex gap-x-[20px]">
                        <div className="w-1/2 md:w-auto" onClick={() => handleExit()}>
                            <Button className="w-full buttonToAnimate" title={dict.return} />
                        </div>
                        <div className="w-1/2 md:w-auto">
                            <Button className="w-full buttonToAnimate origin-left" title={dict.live} href={project.projectUrl} />
                        </div>
                    </div>
                    <div>
                        <h1 className="titleToAnimate origin-top">{project.title}</h1>
                        <p className="dateToAnimate">{project.date}</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:gap-x-[20px] gap-y-[40px] mt-[80px]">
                    <img className="md:w-1/2 imgToAnimate" alt={project.title} src={project.imageUrl} />
                    <p className="md:w-1/2 descriptionToAnimate origin-top">{project.description}</p>
                </div>
                <div className="mt-[100px] techstackToAnimate">
                    <h2 className="uppercase ">- Tech Stack - </h2>
                    {project.technologies.map((tech: any, index: number) => (
                        <p key={index} className="inline-block mr-2 text-[16px]!">
                            {tech}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
