"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const dict = useLanguage();
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageRef.current,
                { y: "0" },
                {
                    y: "-35%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="about" id="about" ref={containerRef}>
            <div className="h-full content-container md:items-end items-center justify-between">
                <div className="h-2/3 flex md:flex-row flex-col md:gap-x-[20px] md:gap-y-0 gap-y-[50px]">
                    <div className="md:w-1/2 h-full overflow-hidden relative">
                        <div
                            ref={imageRef}
                            className="absolute top-0 left-0 w-full h-[160%]" // <<< AQUI ESTÁ A MAGIA
                        >
                            <img src="/About_Photo.jpg" className="w-full h-full object-cover object-center" />
                        </div>
                    </div>

                    <div className="md:w-1/2 flex flex-col gap-y-[20px]">
                        <h1>{dict.about.title}</h1>
                        <p>{dict.about.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
