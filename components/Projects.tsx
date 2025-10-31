import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";

export default function Projects() {
    const dict = useLanguage();
    return (
        <div className="main-grid bg-secondary-background rounded-[10px] relative">
            <h1 className="uppercase absolute w-full text-center top-[3%]">{dict.projects.title}</h1>
            <div className="col-start-1 col-span-full 2xl:col-start-2 2xl:col-span-6 lg:pt-[250px] pt-[150px] pb-[150px]">
                <div className="project-wrapper w-full lg:grid lg:grid-cols-8 gap-x-[20px] py-[50px]">
                    <div className="lg:col-span-4 pl-[20px] flex">
                        <img className="w-full object-cover" src="/Img.png"></img>
                    </div>
                    <div className="lg:col-span-4 ">
                        {dict.projects.project.map((p: any, i: any) => (
                            <div key={i} className=" flex flex-col lg:mt-0 mt-[50px] h-full justify-between">
                                <div className="flex flex-col gap-y-[30px]">
                                    <h4 className="pr-[20px]">{p.title}</h4>
                                    <p className="pr-[20px]">{p.description}</p>
                                </div>
                                <div className="grid grid-cols-4 gap-x-[20px]">
                                    <div className="col-span-2">
                                        <Button href="#" text={p.button} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
