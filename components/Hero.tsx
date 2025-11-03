import { useLanguage } from "@/context/LanguageContext";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

export default function Hero() {
    const dict = useLanguage();
    useGSAP(() => {
        const split = SplitText.create("#title_1", {
            type: "chars",
        });

        const tl = gsap.timeline();

        tl.fromTo(
            split.chars,
            {
                x: -60,
                alpha: 0,
            },
            {
                x: 0,
                alpha: 1,
                duration: 0.1,
                ease: "power2.out",
                stagger: {
                    each: 0.1,
                    from: "start",
                },
            }
        ).from("#title_2", { y: -100, duration: 0.5, ease: "power1.in" }, "-=0.3");
    }, []);

    return (
        <div className="h-screen flex items-center">
            <div className="main-grid">
                <div className="col-start-1 col-span-full lg:col-start-1 lg:col-span-6 2xl:col-start-2 2xl:col-span-6 h-full">
                    {dict.home.title.map((phrase: any, i: any) => (
                        <div>
                            <h1 id={`title_${i + 1}`} key={i} className={`${phrase.highlight ? "text-highlight" : ""}`}>
                                {phrase.text}{" "}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="col-start-1 col-span-full lg:col-start-1 lg:col-span-6 2xl:col-start-2 2xl:col-span-6">
                    <h2>
                        {dict.home.subtitle.map((phrase: any, i: any) => (
                            <span key={i} className={`${phrase.highlight ? "text-highlight" : ""}`}>
                                {phrase.text}
                            </span>
                        ))}
                    </h2>
                </div>
            </div>
        </div>
    );
}
