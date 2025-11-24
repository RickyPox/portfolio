import { useLanguage } from "@/context/LanguageContext";
export default function GetInTouch() {
    const dict = useLanguage();
    return (
        <div className="contacts" id="contacts">
            <div className="content-container flex-col justify-end gap-x-[20px]">
                <div className="w-1/3">
                    <h1>{dict.contacts.title}</h1>
                </div>
                <div className="w-2/3 flex gap-x-[20px]">
                    <div className="w-1/2"></div>
                    <div className="w-1/2">
                        <p>{dict.contacts.description}</p>
                        <div className="flex">
                            <span>GitHub</span>
                            <span>Instagram</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
