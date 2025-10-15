"use client";
import { createContext, useContext } from "react";

const LanguageContext = createContext<any>(null);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ language, children }: { language: any; children: React.ReactNode }) => {
    return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
};
