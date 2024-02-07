import "./globals.css";
import "./output.css";
import {Metadata} from "next";
import {ClerkProvider} from "@clerk/nextjs";


export const dynamic = "force-dynamic"
export const metadata: Metadata = {
    title: "Netflix Clone",
    description: "Netflix Clone by Exlaso.in built with Next.js and TailwindCSS",
    icons: {
        icon: "https://netflix.exlaso.in/icon.ico"
    },
    robots: "index, follow",
    keywords: "Netflix,Clone,Exlaso,Next.js,TailwindCSS, Exlaso.in, Vedant Bhavsar",
    metadataBase: new URL("https://netflix.exlaso.in"),
    creator: "Vedant Bhavsar",
    openGraph: {
        title: "Netflix Clone",
        description: "Netflix Clone by Exlaso.in built with Next.js and TailwindCSS",
        url: "https://netflix.exlaso.in",
        type: "website",
        images: [
            {
                url: "https://netflix.exlaso.in/icon.ico",
                width: 1200,
                height: 630,
                alt: "Netflix Clone by Exlaso.in built with Next.js and TailwindCSS",
            }
        ],
    },
    authors: {
        name: "Vedant Bhavsar",
        url: "https://exlaso.in"
    }

}


export default function RootLayout({children}) {


    return (
        <html lang="en">
        <body>
        <ClerkProvider>

            {children}
        </ClerkProvider>
        </body>
        </html>
    );
}
