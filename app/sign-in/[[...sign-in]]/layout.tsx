import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Login | Netflix Clone",
    description: "Login Page for Netflix Clone by Exlaso.in built with Next.js and TailwindCSS",
    icons: {
        icon: "https://netflix.exlaso.in/icon.ico"
    },
    robots: "index, follow",
    keywords: "Netflix Clone, Netflix Clone Login,Clone,Exlaso,Next.js,TailwindCSS, Exlaso.in, Vedant Bhavsar",
    openGraph: {
        title: "Login | Netflix Clone",
        description: "Login Page for Netflix Clone by Exlaso.in built with Next.js and TailwindCSS",
        url: "https://netflix.exlaso.in/login",
        type: "website",
        images: [
            {
                url: "https://netflix.exlaso.in/icon.ico",
                width: 1200,
                height: 630,
                alt: "Login Page for Netflix Clone by Exlaso.in built with Next.js and TailwindCSS",
            }
        ],
    },

};

export default function DashboardLayout({children}) {
    return <section>{children}</section>
}