import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";

export default function Projects() {
    const dict = useLanguage();
    return (
        <div className="main-grid bg-secondary-background rounded-[10px] relative">
            <h1 className="uppercase absolute w-full text-center top-[3%]">{dict.projects.title}</h1>
            <div className="col-start-1 col-span-full lg:col-start-2 lg:col-span-6 relative lg:pt-[250px] pt-[150px] pb-[150px]">
                <div className="project-wrapper w-full flex lg:flex-row flex-col lg:py-[120px] py-[20px] px-[20px]">
                    <img src="/Img.png"></img>
                    {dict.projects.project.map((p: any, i: any) => (
                        <div key={i}>
                            <div className="lg:w-3/4 flex flex-col gap-y-[30px] lg:mt-0 mt-[50px]">
                                <h4>{p.title}</h4>
                                <p>{p.description}</p>
                                <div className="lg:w-1/3">
                                    <Button href="#" text={p.button} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
