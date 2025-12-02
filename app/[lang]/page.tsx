"use client";

import About from "@/components/About";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import GetInTouch from "@/components/GetInTouch";
import ProjectInfo from "@/components/Project_Info";
import { useState } from "react";

export default function Home() {
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
    const [isProjectOpen, setIsProjectOpen] = useState<boolean>(false);

    const handleProjectSelect = (projectId: number) => {
        setSelectedProjectId(projectId);

        console.log(selectedProjectId);
        console.log(isProjectOpen);
    };

    return (
        <div className="relative">
            {selectedProjectId !== null && (
                <div className="relative z-20">
                    <ProjectInfo
                        id={selectedProjectId}
                        onClose={() => setSelectedProjectId(null)}
                        backgroundRenderChange={() => setIsProjectOpen(!isProjectOpen)}
                    />
                </div>
            )}

            {isProjectOpen === false && (
                <div className="relative z-10">
                    <section>
                        <Landing />
                    </section>
                    <section>
                        <About />
                    </section>
                    <section>
                        <Projects onProjectOpen={handleProjectSelect} />
                    </section>
                    <section>
                        <GetInTouch />
                    </section>
                </div>
            )}
        </div>
    );
}

{
}
