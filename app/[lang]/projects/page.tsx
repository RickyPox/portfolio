"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
    const dict = useLanguage();
    return (
        <div className="relative">
            <img src="/Projects.jpg" className="w-screen h-screen fixed -z-10"></img>
            <div className="content-container flex-col gap-y-[40px]">
                <h1>{dict.projects.title}</h1>
                <div className="grid grid-cols-4 gap-[20px]">
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                    <div className="bg-amber-50 w-full aspect-video col-span-1"></div>
                </div>
            </div>
        </div>
    );
}
