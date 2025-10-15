import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function GetToKnow() {
    const dict = useLanguage();
    return (
        <div className="main-grid">
            <div className="col-start-2 col-span-6">
                <h1 className="uppercase lineSpacing">
                    {dict.about.title.map((phrase: any, i: any) => (
                        <span key={i} className={`${phrase.highlight ? "text-highlight" : ""}`}>
                            {phrase.text}
                        </span>
                    ))}
                </h1>
            </div>
        </div>
    );
}
