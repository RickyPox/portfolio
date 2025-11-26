import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";
export default function GetInTouch() {
    const dict = useLanguage();
    return (
        <div className="contacts" id="contacts">
            <div className="content-container flex-col justify-center gap-x-[20px]">
                <div className="w-1/3">
                    <h1>{dict.contacts.title}</h1>
                </div>
                <div className=" flex md:flex-row flex-col md:gap-x-[100px] md:gap-y-0 gap-y-[100px] mt-[50px]">
                    <div className="md:w-1/2 flex flex-col gap-y-[40px]">
                        <p>{dict.contacts.description}</p>
                        <Button title={dict.contacts.button} href="#" />
                    </div>
                    <div className="md:w-1/2">
                        <p>{dict.contacts.socials}</p>
                        <div className="flex gap-x-[30px] mt-[30px]">
                            <span className="text-[24px] font-[Staatliches]">GitHub</span>
                            <span className="text-[24px] font-[Staatliches]">Instagram</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
