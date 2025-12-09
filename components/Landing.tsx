import { useLanguage } from "@/context/LanguageContext";
import { useRef } from "react";
import gsap from "gsap";

import Button from "./Button";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
    const dict = useLanguage();
    const landingContainerRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        if (!titleRef.current || !nameRef.current) return;
        const titleElements = titleRef.current?.querySelectorAll("h1");
        const name = nameRef.current?.querySelectorAll("h2");

        // ON LOAD ANIMATIONS//

        const split = Array.from(titleElements).map((h1) => new SplitText(h1, { type: "chars" }));

        tl.from(split[0].chars, {
            y: -150,
            opacity: 0,
            duration: 1,
            stagger: 0.05,
            ease: "power3.out",
        })
            .from(split[1].chars, {
                y: 150,
                opacity: 0,
                duration: 1,
                stagger: 0.05,
                delay: -1,
                ease: "power3.out",
            })
            .from(
                name,
                {
                    x: -150,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power1.in",
                    stagger: 0.2,
                },
                "-=1"
            )
            .from(
                descriptionRef.current,
                {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power3.inOut",
                },
                "=-0.5"
            );

        //ON SCROLL ANIMATIONS //
        gsap.fromTo(
            nameRef.current,
            { y: 0 },
            {
                y: "260%",
                ease: "none",
                scrollTrigger: {
                    trigger: landingContainerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            }
        );

        titleElements.forEach((h1: any, i: any) => {
            gsap.to(h1, {
                y: -(100 + i * 25) + "%",
                ease: "none",
                scrollTrigger: {
                    trigger: landingContainerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        });

        gsap.fromTo(
            descriptionRef.current,
            { y: 0 },
            {
                y: "-50%",
                ease: "none",
                scrollTrigger: {
                    trigger: landingContainerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <div className="home" id="home" ref={landingContainerRef}>
            <div className="relative content-container md:flex-row flex-col md:gap-y-0 gap-y-[20px] md:items-end md:justify-between justify-end">
                <div className="md:w-1/2 flex flex-col justify-between h-full">
                    <div className="-space-y-[20px]" ref={nameRef}>
                        <h2 className="name leading-[50px]!">Ricardo Ribeiro</h2>
                        <h2>2025</h2>
                    </div>
                    <div ref={titleRef} className="">
                        {dict.home.title.map((text: string, i: number) => (
                            <div key={i}>
                                <h1 className="clip-path">{text}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="2xl:w-1/3 md:w-1/2 flex flex-col gap-y-[40px]" ref={descriptionRef}>
                    <p>{dict.home.description}</p>
                    <Button title={dict.home.button} href="https://www.youtube.com/watch?v=TJxA6-cQJTE&t=1240s"></Button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
