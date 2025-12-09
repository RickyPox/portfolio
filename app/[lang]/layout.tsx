import { LanguageProvider } from "@/context/LanguageContext";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

interface LangLayoutProps {
    children: React.ReactNode;
    params: Promise<{ lang: string }>; // ⚠️ params é uma Promise
}

// Função para carregar idioma dinamicamente
async function loadLanguage(lang: string) {
    try {
        const language = (await import(`@/locales/${lang}.json`)).default;
        return language;
    } catch (error) {
        redirect("/en");
    }
}

// Função para gerar metadata dinamicamente
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params; // ⚠️ await aqui
    const language = await loadLanguage(lang);
    const meta = language.meta;

    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        authors: [{ name: meta.author || "Ricardo Ribeiro" }],
        openGraph: {
            title: meta.og_title,
            description: meta.og_description,
            url: meta.url,
            siteName: meta.title,
            images: [
                {
                    url: meta.image,
                    width: 1200,
                    height: 630,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: meta.twitter_title,
            description: meta.twitter_description,
            images: [meta.image],
        },
    };
}

// Layout principal por idioma
export default async function LangLayout({ children, params }: LangLayoutProps) {
    const { lang } = await params; // ⚠️ await aqui também
    const language = await loadLanguage(lang);

    return <LanguageProvider language={language}>{children}</LanguageProvider>;
}
