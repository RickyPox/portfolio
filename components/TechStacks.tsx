import { useLanguage } from "@/context/LanguageContext";

export default function TechStacks() {
    const techs = [
        { name: "Html 5", img: "" },
        { name: "Css", img: "" },
        { name: "Javascript", img: "" },
        { name: "Typescript", img: "" },
        { name: "React", img: "" },
        { name: "Nextjs", img: "" },
        { name: "Tailwindcss", img: "" },
        { name: "Gsap", img: "" },
        { name: "Supabase", img: "" },
        { name: "APIs", img: "" },
        { name: "Vercel", img: "" },
        { name: "Github", img: "" },
    ];

    const dict = useLanguage();
    return (
        <div className="main-grid">
            <div className="col-start-2 col-span-6 grid grid-cols-6 gap-[20px]">
                <div className="col-start-1 col-span-full flex gap-x-[20px]">
                    <h3>/////////////////////////////////////</h3>
                    <h3>{dict.tech.title}</h3>
                </div>
                {techs.map((tech, i) => (
                    <div key={i} className=" col-span-1 tech-card">
                        <img alt={tech.name} src={tech.img} />
                        <h4>{tech.name}</h4>
                    </div>
                ))}
                <div className="col-start-1 col-span-full flex gap-x-[20px] justify-end items-center">
                    <p>{dict.tech.info}</p>
                    <h3>/////////////////////////////////////</h3>
                </div>
            </div>
        </div>
    );
}
