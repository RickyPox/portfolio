import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";
export default function Projects() {
    const dict = useLanguage();
    return (
        <div className="projects" id="projects">
            <div className="content-container flex-col md:flex-row md:items-end md:justify-between justify-center md:gap-x-[40px] gap-y-[50px]">
                <div className="bg-amber-50 w-full aspect-video md:hidden block"></div>
                <div className="md:w-1/2 flex flex-col gap-y-[30px]">
                    <h1>{dict.projects.title}</h1>
                    <p>{dict.projects.description}</p>
                    <Button title={dict.projects.button} href="#" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:gap-y-[140px] gap-y-[40px]">
                    <div className="bg-amber-50 w-full aspect-video md:block hidden"></div>
                    <div className="flex gap-x-[10px]">
                        <div className="bg-amber-50 w-1/4 aspect-video"></div>
                        <div className="bg-amber-50 w-1/4 aspect-video"></div>
                        <div className="bg-amber-50 w-1/4 aspect-video"></div>
                        <div className="bg-amber-50 w-1/4 aspect-video"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
