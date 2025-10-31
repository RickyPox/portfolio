import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";

export default function GetToKnow() {
    const dict = useLanguage();
    return (
        <div className="main-grid">
            <div className=" col-start-1 col-span-full 2xl:col-start-2 2xl:col-span-6">
                <h1 className="uppercase line-spacing">
                    {dict.about.title.map((phrase: any, i: any) => (
                        <span key={i} className={`${phrase.highlight ? "text-highlight" : ""}`}>
                            {phrase.text}
                        </span>
                    ))}
                </h1>
            </div>
            <div className="col-start-1 col-span-full lg:col-start-5 lg:col-span-4 lg:row-start-2 2xl:col-start-5 2xl:col-span-3  w-1/2 lg:w-auto flex justify-center">
                <div className="image-container">
                    <div className="relative w-full lg:h-full max-h-[600px] clip-mask">
                        <img src="/Foto.png" className="w-full h-full object-cover" alt="Imagem mascarada" />
                    </div>
                </div>
            </div>
            <div className="col-start-1 col-span-full lg:col-start-1 lg:col-span-4 2xl:col-start-2 2xl:col-span-3 lg:row-start-2 mt-[35px] grid grid-cols-4  gap-x-[20px]">
                {dict.about.info.map((parapgrah: any, i: any) => (
                    <p key={i} className={`${parapgrah.bold ? "bold" : ""} col-span-4`}>
                        {parapgrah.text}
                        <br></br>
                        <br></br>
                    </p>
                ))}
                <div className="lg:col-start-3 lg:col-span-2 col-start-1 col-span-full my-[40px]">
                    <Button text={dict.about.button} href="#" />
                </div>
            </div>
        </div>
    );
}
