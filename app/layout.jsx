import "./globals.css";
import "./output.css";


export const dynamic = "force-dynamic"
export const metadata = {
    title: {default: "Netflix clone"},
    description: "Generated by create next app",

    icons: {
        icon: '/icon.ico',
    },
};


export default function RootLayout({children}) {


    return (
        <html lang="en">
        <body>

        {children}
        </body>
        </html>
    );
}
