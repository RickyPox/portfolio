import { useLanguage } from "@/context/LanguageContext";

export default function TechStacks() {
    const techs = [
        { name: "Html 5", img: "/techs/Html.png" },
        { name: "Css", img: "/techs/Css.png" },
        { name: "Javascript", img: "/techs/Javascript.png" },
        { name: "Typescript", img: "/techs/Typescript.png" },
        { name: "React", img: "/techs/React.png" },
        { name: "Nextjs", img: "/techs/Next.png" },
        { name: "Tailwind", img: "/techs/Tailwind.png" },
        { name: "Gsap", img: "/techs/Gsap.png" },
        { name: "Supabase", img: "/techs/Supabase.png" },
        { name: "Figma", img: "/techs/Figma.png" },
        { name: "Vercel", img: "/techs/Vercel.png" },
        { name: "Github", img: "/techs/Github.png" },
    ];

    const dict = useLanguage();
    return (
        <div className="main-grid">
            <div className="col-start-1 col-span-full 2xl:col-start-2 2xl:col-span-6 grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-8 gap-[20px]">
                <div className="col-start-1 col-span-full lg:flex gap-x-[20px]">
                    <h3 className="lg:block hidden">////////////////////////////////</h3>
                    <h3>{dict.tech.title}</h3>
                    <p className="block lg:hidden">{dict.tech.info}</p>
                </div>
                {techs.map((tech, i) => (
                    <div key={i} className=" lg:col-span-1 col-span-4 tech-card flex flex-col gap-[20px]">
                        <img className="max-w-[70px] max-h-[50px]" alt={tech.name} src={tech.img} />
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
