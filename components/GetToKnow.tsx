import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function GetToKnow() {
    const dict = useLanguage();
    return (
        <div className="main-grid">
            <div className="col-start-2 col-span-6">
                <h1 className="uppercase line-spacing">
                    {dict.about.title.map((phrase: any, i: any) => (
                        <span key={i} className={`${phrase.highlight ? "text-highlight" : ""}`}>
                            {phrase.text}
                        </span>
                    ))}
                </h1>
            </div>
            <div className="col-start-2 col-span-4 mt-[35px]">
                {dict.about.info.map((parapgrah: any, i: any) => (
                    <p key={i} className={`${parapgrah.bold ? "bold" : ""}`}>
                        {parapgrah.text}
                        <br></br>
                        <br></br>
                    </p>
                ))}
            </div>
            <div className="col-start-6 col-span-2 mt-[35px] flex justify-center">
                <div className="relative w-full h-full clip-mask bg-amber-800">
                    <img src="/Foto.png" className="w-full h-full object-cover" alt="Imagem mascarada" />
                </div>
            </div>
        </div>
    );
}
