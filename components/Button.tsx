import Link from "next/link";
import React from "react";

export default function Button({ title, href }: any) {
    return (
        <div>
            <button>
                <Link href={href}>{title}</Link>
            </button>
        </div>
    );
}
