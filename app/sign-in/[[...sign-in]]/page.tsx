import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Nav from "@/Components/Nav/Nav";
import React from "react";

const Page = () => {
    return (
        <div className="relative h-screen">
            <Image
                src={"/static/loginbg.jpg"}
                alt="netflix background "
                className="object-cover brightness-50 blur-sm -z-30"
                layout="fill"
            />
            <Nav logoonly={true}  />
            <div className="flex items-center justify-center w-full h-full">
                <SignIn

                />
            </div>
        </div>
    );
};
export default Page