"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const dict = useLanguage();
    const aboutContainerRef = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const aboutDescription = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const paragraphs = aboutDescription.current?.querySelectorAll("p");
        gsap.fromTo(
            imageRef.current,
            { y: "0" },
            {
                y: "-35%",
                ease: "none",
                scrollTrigger: {
                    trigger: aboutContainerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            }
        );

        gsap.from(imageRef.current, {
            x: 100,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top 20%",
                toggleActions: "play pause resume reverse",
            },
        });

        gsap.from(titleRef.current, {
            x: -10,
            opacity: 0,
            duration: 0.6,
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 50%",
                toggleActions: "play pause resume reverse",
            },
        });
        paragraphs?.forEach((par) => {
            gsap.from(par, {
                y: -10,
                opacity: 0,
                duration: 0.3,
                scrollTrigger: {
                    trigger: par,
                    start: "top 90%",
                    toggleActions: "play pause resume reverse",
                },
            });
        });

        gsap.to(aboutContainerRef.current, {
            y: "100%",
            scrollTrigger: {
                trigger: aboutContainerRef.current,
                start: "110% bottom",
                markers: true,
                scrub: 1,
            },
        });
    }, []);

    return (
        <div className="about" id="about" ref={aboutContainerRef}>
            <div className="content-container  md:items-end items-center justify-between">
                <div className="flex w-full md:flex-row flex-col md:gap-x-[20px] md:gap-y-0 gap-y-[50px]">
                    <div className="md:w-1/3 sm:min-h-[60vh] min-h-[40vh] overflow-hidden relative">
                        <div ref={imageRef} className="absolute top-0 left-0 w-full h-[160%]">
                            <img src="/About_Photo.jpg" className="w-full h-full object-cover object-center" />
                        </div>
                    </div>

                    <div ref={aboutDescription} className="md:w-2/3 flex flex-col gap-y-[20px]">
                        <h1 ref={titleRef}>{dict.about.title}</h1>

                        {dict.about.description.map((p: string, i: number) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
