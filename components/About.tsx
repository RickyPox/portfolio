import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const dict = useLanguage();
    return (
        <div className="about" id="about">
            <div className="content-container items-end justify-between">
                <div className="flex md:flex-row flex-col md:gap-x-[20px] md:gap-y-0 gap-y-[50px]">
                    <div className="md:w-1/2">
                        <img className="w-full h-full object-cover object-center" src="/About_Photo.jpg" />
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-y-[40px]">
                        <h1>{dict.about.title}</h1>
                        <p>{dict.about.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
