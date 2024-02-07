"use client"
import React from 'react'
import {useRouter} from "next/navigation";
import {motion} from 'framer-motion';
import {auth, SignOutButton} from "@clerk/nextjs";

const Listnav = () => {

    const router = useRouter();
    const handleonclickhome = (e) => {
        e.preventDefault();
        router.push("/");
    };
    const handleonclicklist = (e) => {
        e.preventDefault();
        router.push("/browse/my-list");
    };

    return (
        <ul className="flex gap-5">
            <motion.li
                whileTap={{
                    scale: .9
                }}
                onClick={handleonclickhome}
                className="cursor-pointer"
            >
                Home
            </motion.li>
            <motion.li
                whileTap={{
                    scale: .9
                }}
                onClick={handleonclicklist}
                className="cursor-pointer"
            >
                My list
            </motion.li>


        </ul>
    )
}

export default Listnav