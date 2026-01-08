"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    // Extract current language from pathname (e.g., "/en/..." or "/pt/...")
    const currentLang = pathname.split("/")[1];

    const handleLanguageChange = (newLang: string) => {
        if (currentLang !== newLang) {
            // Replace the language in the pathname
            const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`);
            router.push(newPathname);
        }
    };

    return (
        <div className="flex gap-x-[30px]">
            <p
                onClick={() => handleLanguageChange("en")}
                className={`uppercase text-[16px]! cursor-pointer ${currentLang === "en" ? "opacity-100" : "opacity-30 hover:opacity-75"}`}
            >
                En
            </p>
            <p
                onClick={() => handleLanguageChange("pt")}
                className={`uppercase text-[16px]! cursor-pointer ${currentLang === "pt" ? "opacity-100" : "opacity-30 hover:opacity-75"}`}
            >
                PT
            </p>
        </div>
    );
}
