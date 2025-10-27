import { useLanguage } from "@/context/LanguageContext";

export default function TechStacks() {
    const techs = [
        { name: "Html 5", img: "/" },
        { name: "Css", img: "/" },
        { name: "Javascript", img: "/" },
        { name: "Typescript", img: "/" },
        { name: "React", img: "/" },
        { name: "Nextjs", img: "/" },
        { name: "Tailwindcss", img: "/" },
        { name: "Gsap", img: "/" },
        { name: "Supabase", img: "/" },
        { name: "APIs", img: "/" },
        { name: "Vercel", img: "/" },
        { name: "Github", img: "/" },
    ];

    const dict = useLanguage();
    return (
        <div className="main-grid">
            <div className="col-start-1 col-span-full lg:col-start-2 lg:col-span-6 grid lg:grid-cols-6 grid-cols-8 gap-[20px]">
                <div className="col-start-1 col-span-full lg:flex gap-x-[20px]">
                    <h3 className="lg:block hidden">/////////////////////////////////////</h3>
                    <h3>{dict.tech.title}</h3>
                    <p className="block lg:hidden">{dict.tech.info}</p>
                </div>
                {techs.map((tech, i) => (
                    <div key={i} className=" lg:col-span-1 col-span-4 tech-card">
                        <img alt={tech.name} src={tech.img} />
                        <h5>{tech.name}</h5>
                    </div>
                ))}
                <div className="col-start-1 col-span-full lg:flex hidden gap-x-[20px] justify-end items-center">
                    <p>{dict.tech.info}</p>
                    <h3>/////////////////////////////////////</h3>
                </div>
            </div>
        </div>
    );
}
