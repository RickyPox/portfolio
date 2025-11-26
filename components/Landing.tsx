import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import Button from "./Button";

const Landing = () => {
    const dict = useLanguage();
    return (
        <div className="home" id="about">
            <div className="content-container md:flex-row flex-col md:gap-y-0 gap-y-[20px] md:items-end justify-between">
                <div className="md:w-1/3 h-full">
                    <div className="flex w-full h-full flex-col justify-between">
                        <div className="-space-y-[20px]">
                            <h1 className="md:text-[2.5vw]! text-[4vw]! leading-[50px]!">Ricardo Ribeiro</h1>
                            <h2>2025</h2>
                        </div>
                        <div>
                            {dict.home.title.map((text: string, i: number) => (
                                <div key={i}>
                                    <h1>{text}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3  flex flex-col gap-y-[40px]">
                    <p>{dict.home.description}</p>
                    <Button title={dict.home.button} href="#"></Button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
