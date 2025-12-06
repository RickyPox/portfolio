"use client";
import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { useRef } from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeSetup() {
    const dict = useLanguage();
    const projects = dict.projectsInfo;

    const projectsRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    gsap.fromTo(projectsRef.current, { x: "150%" }, { x: "-50%" });
    return (
        <div id="projects">
            <Marquee speed={25}>
                <div className="bg-amber-50 w-[500px] h-[500px]" />
            </Marquee>
        </div>
    );
}
