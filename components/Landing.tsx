import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import Button from "./Button";

const Landing = () => {
    const dict = useLanguage();
    return (
        <div className="home">
            <div className="content-container items-end justify-between">
                <div className="w-1/3">
                    {dict.home.title.map((text: string, i: number) => (
                        <div key={i}>
                            <h1>{text}</h1>
                        </div>
                    ))}
                </div>
                <div className="w-1/3 flex flex-col gap-y-[40px]">
                    <p>{dict.home.description}</p>
                    <Button title="Get to know me" href="#"></Button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
