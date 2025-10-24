"use client";
import Contacts from "@/components/Contact";
import GetToKnow from "@/components/GetToKnow";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStacks from "@/components/TechStacks";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
    const dict = useLanguage();

    return (
        <div>
            <Hero></Hero>
            <GetToKnow></GetToKnow>
            <TechStacks></TechStacks>
            <section className="mt-[200px]">
                <Projects></Projects>
            </section>
            <Contacts></Contacts>
        </div>
    );
}

{
}
