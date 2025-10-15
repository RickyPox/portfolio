import { LanguageProvider } from "@/context/LanguageContext";
import { redirect } from "next/navigation";

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    let language;

    try {
        language = (await import(`@/locales/${lang}.json`)).default;
    } catch (error) {
        redirect("/en");
    }

    return (
        <html lang={lang}>
            <body>
                <LanguageProvider language={language}> {children}</LanguageProvider>
            </body>
        </html>
    );
}
