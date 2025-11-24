"use client";

import About from "@/components/About";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
    return (
        <div>
            <section>
                <Landing />
            </section>
            <section>
                <About />
            </section>
            <section>
                <Projects />
            </section>
            <section>
                <GetInTouch />
            </section>
        </div>
    );
}

{
}
