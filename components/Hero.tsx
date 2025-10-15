import { useLanguage } from "@/context/LanguageContext";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

export default function Hero() {
    const dict = useLanguage();
    const textToSplitRef = useRef<HTMLHeadingElement>(null);

    /* useGSAP(() => {
        const split = SplitText.create(textToSplitRef.current, {
            type: "chars",
        });

        const chars = split.chars;

        chars.forEach((char) => {
            char.addEventListener("mouseenter", () => {
                gsap.to(char, {
                    opacity: 1,
                    duration: 0.5,
                    ease: "power1.in",
                });
            });
            char.addEventListener("mouseleave", () => {
                gsap.to(char, {
                    opacity: 0.05,
                    duration: 0.5,
                    ease: "power1.in",
                });
            });
        });
        return () => {
            split.revert();
        };
    }),
        []; */

    return (
        <div className="main-grid">
            <div className="col-start-2 col-span-5">
                <h1 ref={textToSplitRef}>{dict.home.front}</h1>
                <h1 className="text-highlight -mt-[11.5vw] -ml-[2px]">{dict.home.dev}</h1>
            </div>
            <div className="col-start-2 col-span-5">
                <h2>
                    {dict.home.subtitle.map((phrase: any, i: any) => (
                        <span key={i} className={`${phrase.highlight ? "text-highlight" : ""}`}>
                            {phrase.text}
                        </span>
                    ))}
                </h2>
            </div>
        </div>
    );
}
