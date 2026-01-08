import gsap from "gsap";
import React, { useRef, useState } from "react";

export default function Button({ title, href, className }: { title: string; href?: string; className?: string }) {
    const bgRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleButtonEnter = () => {
        gsap.to(bgRef.current, {
            width: "100%",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(buttonRef.current, {
            color: "var(--secondary-color)",
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleButtonLeave = () => {
        gsap.to(bgRef.current, {
            width: "0%",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(buttonRef.current, {
            color: "white",
            duration: 0.3,
            ease: "power2.out",
        });
    };

    return (
        <div>
            <a href={href} onMouseEnter={() => handleButtonEnter()} onMouseLeave={() => handleButtonLeave()}>
                <button ref={buttonRef} className={`${className} relative z-10 cursor-pointer px-[15px] py-[10px] md:px-[25] md:py-[15px]`}>
                    <div ref={bgRef} className="absolute left-0 top-0 h-full w-0 -z-10 scale-[1.01]" style={{ backgroundColor: "white" }} />
                    {title}
                </button>
            </a>
        </div>
    );
}
