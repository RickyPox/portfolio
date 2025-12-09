import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function GetInTouch(lang: any) {
    const dict = useLanguage();
    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const socialsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(titleRef.current, {
            opacity: 0,
            y: "-40%",
            duration: 0.3,
            ease: "power2.inOut",
            scrollTrigger: { trigger: titleRef.current, start: "bottom bottom" },
        });

        gsap.from(descriptionRef.current, {
            opacity: 0,
            y: "-40%",
            duration: 0.3,
            ease: "power2.inOut",
            scrollTrigger: { trigger: descriptionRef.current, start: "bottom bottom" },
        });

        if (!socialsRef.current) return;

        gsap.from(socialsRef.current?.querySelectorAll("p"), {
            opacity: 0,
            y: "-40%",
            duration: 0.3,
            ease: "power2.inOut",
            stagger: 0.15,
            scrollTrigger: { trigger: socialsRef.current, start: "bottom bottom" },
        });
    });

    return (
        <div className="contacts" id="contacts">
            <div className="content-container flex-col justify-center gap-x-[20px]">
                <div className="lg:w-1/3" ref={titleRef}>
                    <h1>{dict.contacts.title}</h1>
                </div>
                <div className=" flex lg:flex-row flex-col lg:gap-x-[100px] lg:gap-y-0 gap-y-[100px] mt-[50px]">
                    <div className="lg:w-1/2 flex flex-col gap-y-[20px] md:gap-y-[40px]" ref={descriptionRef}>
                        <p>{dict.contacts.description}</p>
                        <Button title={dict.contacts.button} href="#" />
                    </div>
                    <div className="lg:w-1/2" ref={socialsRef}>
                        <p>{dict.contacts.socials}</p>
                        <div className="flex gap-x-[30px] lg:mt-[50px] mt-[30px]">
                            <p className="font-[Staatliches]!">GitHub</p>
                            <p className="font-[Staatliches]!">Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
