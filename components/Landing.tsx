import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import Button from "./Button";

const Landing = () => {
    const dict = useLanguage();
    return (
        <div className="home" id="home">
            <div className="relative content-container md:flex-row flex-col md:gap-y-0 gap-y-[20px] md:items-end md:justify-between justify-end">
                <div className="md:w-1/2 flex flex-col justify-between h-full">
                    <div className="-space-y-[20px]">
                        <h2 className="name leading-[50px]!">Ricardo Ribeiro</h2>
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
                <div className="2xl:w-1/3 md:w-1/2 flex flex-col gap-y-[40px]">
                    <p>{dict.home.description}</p>
                    <Button title={dict.home.button} href="https://www.youtube.com/watch?v=TJxA6-cQJTE&t=1240s"></Button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
