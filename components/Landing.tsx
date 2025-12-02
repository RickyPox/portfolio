import { useLanguage } from "@/context/LanguageContext";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
    const dict = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            nameRef.current,
            { y: 0 },
            {
                y: "260%",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            }
        );
        if (!titleRef.current) return;
        const titleElements = titleRef.current.querySelectorAll("div");
        titleElements.forEach((el: any, i: any) => {
            gsap.fromTo(
                el,
                { y: 0 },
                {
                    y: -(100 + i * 25) + "%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
        });

        gsap.fromTo(
            descriptionRef.current,
            { y: 0 },
            {
                y: "-50%",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <div className="home" id="home" ref={containerRef}>
            <div className="relative content-container md:flex-row flex-col md:gap-y-0 gap-y-[20px] md:items-end md:justify-between justify-end">
                <div className="md:w-1/2 flex flex-col justify-between h-full">
                    <div className="-space-y-[20px]" ref={nameRef}>
                        <h2 className="name leading-[50px]!">Ricardo Ribeiro</h2>
                        <h2>2025</h2>
                    </div>
                    <div ref={titleRef}>
                        {dict.home.title.map((text: string, i: number) => (
                            <div key={i}>
                                <h1>{text}</h1>
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
