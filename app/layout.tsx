import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ricardo Ribeiro",
    description: "Description",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
