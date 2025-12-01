import { useLanguage } from "@/context/LanguageContext";
import { projectsByLang } from "@/data/projects/index";
import Button from "./Button";
import { useState } from "react";
export default function Projects() {
    const dict = useLanguage();
    const projects = projectsByLang[dict.lang as keyof typeof projectsByLang] || projectsByLang["en"];
    const ProjectsToShow = [1, 2]; // Choose the ids from data/projects that you want to show on this component
    const filteredProjects = projects.filter((p) => ProjectsToShow.includes(p.id));
    const [hoveredProject, setHoveredProject] = useState(filteredProjects[0]);

    const handleHoveredProject = (id: number) => {
        setHoveredProject(filteredProjects[id - 1]);
    };

    return (
        <div className="projects" id="projects">
            <div className="content-container flex-col md:flex-row md:items-end md:justify-between justify-center md:gap-x-[40px] gap-y-[50px]">
                <img src={hoveredProject.imageUrl} alt={hoveredProject.title} className=" w-full aspect-video md:hidden block" />
                <div className="md:w-1/2 flex flex-col gap-y-[30px]">
                    <h1>{dict.projects.title}</h1>
                    <p>{dict.projects.description}</p>
                    <Button title={dict.projects.button} href="#" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:gap-y-[140px] gap-y-[40px]">
                    <img src={hoveredProject.imageUrl} alt={hoveredProject.title} className=" w-full aspect-video md:block hidden" />
                    <div className="flex gap-x-[10px]">
                        {filteredProjects.map((project) => (
                            <img
                                key={project.id}
                                src={project.imageUrl}
                                alt={project.title}
                                className="aspect-video"
                                style={{ width: 100 / filteredProjects.length + "%" }}
                                onMouseEnter={() => handleHoveredProject(project.id)}
                            ></img>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
