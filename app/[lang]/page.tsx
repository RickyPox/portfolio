"use client";

import Landing from "@/components/Landing";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
    const dict = useLanguage();

    return (
        <div>
            <section>
                <Landing />
            </section>
        </div>
    );
}

{
}
