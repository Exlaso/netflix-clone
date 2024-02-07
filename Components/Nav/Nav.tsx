import React from "react";
import Netflixlogo from "./Netflixlogo";
import Listnav from "./Listnav";
import {getServerSession} from "next-auth";
import {auth, UserButton} from "@clerk/nextjs";

const Nav = async ({logoonly = false}) => {

    return (
        <div className="fixed z-30 flex items-center justify-between w-full gap-4 px-3 from-black bg-gradient-to-b ">
            <div className="flex items-center tshadow">
                <Netflixlogo/>
                {logoonly ? "" : <Listnav />}
            </div>
                <UserButton />
        </div>
    );
};

export default Nav;
