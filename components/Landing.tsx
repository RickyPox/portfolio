import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import Button from "./Button";

const Landing = () => {
    const dict = useLanguage();
    return (
        <div className="home" id="about">
            <div className="content-container items-end justify-between">
                <div className="w-1/3 h-full">
                    <div className="flex w-full h-full flex-col justify-between">
                        <div className="-space-y-[50px]">
                            <h1 className="text-[45px]!">Ricardo Ribeiro</h1>
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
                <div className="w-1/3 flex flex-col gap-y-[40px]">
                    <p>{dict.home.description}</p>
                    <Button title={dict.home.button} href="#"></Button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
