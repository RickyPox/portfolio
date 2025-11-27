import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";
export default function GetInTouch() {
    const dict = useLanguage();
    return (
        <div className="contacts" id="contacts">
            <div className="content-container flex-col justify-center gap-x-[20px]">
                <div className="lg:w-1/3">
                    <h1>{dict.contacts.title}</h1>
                </div>
                <div className=" flex lg:flex-row flex-col lg:gap-x-[100px] lg:gap-y-0 gap-y-[100px] mt-[50px]">
                    <div className="lg:w-1/2 flex flex-col gap-y-[20px] md:gap-y-[40px]">
                        <p>{dict.contacts.description}</p>
                        <Button title={dict.contacts.button} href="#" />
                    </div>
                    <div className="lg:w-1/2">
                        <p>{dict.contacts.socials}</p>
                        <div className="flex gap-x-[30px] lg:mt-[50px] mt-[30px]">
                            <p className="font-[Staatliches]!">GitHub</p>
                            <p className="font-[Staatliches]!">Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
