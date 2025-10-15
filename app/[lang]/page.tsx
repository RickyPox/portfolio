"use client";
import GetToKnow from "@/components/GetToKnow";
import Hero from "@/components/Hero";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
    const dict = useLanguage();

    return (
        <div>
            <Hero></Hero>
            <GetToKnow></GetToKnow>
        </div>
    );
}

{
}
