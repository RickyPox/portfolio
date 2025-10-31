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
            <section className="lg:mt-[200px] mt-[100px]">
                <GetToKnow></GetToKnow>
            </section>
            <TechStacks></TechStacks>
            <section className="lg:mt-[200px] mt-[100px]">
                <Projects></Projects>
            </section>
            <Contacts></Contacts>
        </div>
    );
}

{
}
