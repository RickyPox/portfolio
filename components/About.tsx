import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const dict = useLanguage();
    return (
        <div className="about" id="about">
            <div className="content-container items-end justify-between">
                <div className="flex gap-x-[20px]">
                    <div className="w-1/2">
                        <img className="w-full" src="/About_Photo.jpg" />
                    </div>
                    <div className="w-1/2 flex flex-col gap-y-[40px]">
                        <h1>{dict.about.title}</h1>
                        <p>{dict.about.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
