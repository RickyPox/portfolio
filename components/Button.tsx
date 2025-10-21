import React from "react";

export default function Button({ text, href }: any) {
    return (
        <div>
            <button className="w-full py-[25px] rounded-[10px]">
                <a href={href}>{text}</a>
            </button>
        </div>
    );
}
