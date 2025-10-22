"use client";
import GetToKnow from "@/components/GetToKnow";
import Hero from "@/components/Hero";
import TechStacks from "@/components/TechStacks";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
    const dict = useLanguage();

    return (
        <div>
            <Hero></Hero>
            <GetToKnow></GetToKnow>
            <TechStacks></TechStacks>
        </div>
    );
}

{
}
