import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef, useState } from "react";

export default function Button({ title, href }: any) {
    const [isHovered, setIsHovered] = useState(false);
    const bgRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        gsap.to(bgRef.current, {
            width: isHovered ? "100%" : "0%",
            duration: 0.3,
            ease: "power2.out",
        });
    }, [isHovered]);

    return (
        <div>
            <Link href={href} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <button className="relative z-10 cursor-pointer px-[15px] py-[10px] md:px-[25] md:py-[15px]">
                    <div ref={bgRef} className="absolute left-0 top-0 h-full w-0 bg-[var(--secondary-color)] -z-10 " />
                    {title}
                </button>
            </Link>
        </div>
    );
}
