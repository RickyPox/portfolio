import { useLanguage } from "@/context/LanguageContext";
import Button from "./Button";

export default function Contacts() {
    const dict = useLanguage();
    return (
        <div className="main-grid">
            <div className="col-start-1 col-span-full lg:col-start-2 lg:col-span-6">
                <h1 className="uppercase line-spacing">
                    {dict.contact.title.map((phrase: any, i: any) => (
                        <span key={i} className={`${phrase.highlight ? "text-highlight" : ""}`}>
                            {phrase.text}
                            <br></br>
                        </span>
                    ))}
                </h1>
                <div className="flex flex-col gap-y-[20px] mt-[80px] pb-[50px]">
                    <div className="w-full lg:flex lg:flex-row-reverse gap-x-[20px]">
                        <div className="lg:w-1/2 mb-[30px] lg:mb-0">
                            <p>{dict.contact.info}</p>
                        </div>
                        <div className="lg:w-1/2 flex flex-col gap-y-[20px] ">
                            <input placeholder={dict.contact.form_name}></input>
                            <input placeholder={dict.contact.form_email}></input>
                            <input placeholder={dict.contact.form_subject}></input>
                        </div>
                    </div>
                    <div className="w-full">
                        <textarea className="w-full h-[300px] p-[20px]" placeholder={dict.contact.form_message} />
                    </div>
                    <div className="lg:w-1/6">
                        <Button href="#" text={dict.contact.button} />
                    </div>
                </div>
            </div>
        </div>
    );
}
