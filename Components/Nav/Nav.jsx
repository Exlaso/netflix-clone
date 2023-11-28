import React from "react";
import Netflixlogo from "./Netflixlogo";
import DropDown from "./dropdown";
import Listnav from "./Listnav";
import {cookies} from "next/headers";
import Link from "next/link";

const Nav = ({logoonly = false}) => {

    const token = cookies().get("token");


    return (
        <div className="fixed z-30 flex items-center justify-between w-full gap-4 px-3 from-black bg-gradient-to-b ">
            <div className="flex items-center tshadow">
                <Netflixlogo/>
                {logoonly ? "" : <Listnav/>}
            </div>
            {!token ? (
                <Link href={"login"} className={"px-4 py-2 bg-gray-500/80 rounded-lg"}>Login</Link>) : (logoonly ? "" :
                <DropDown/>)}
        </div>
    );
};

export default Nav;
