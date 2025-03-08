"use client";
import {motion} from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";
import React, {useState} from "react";
import {placeholderURL} from "@/Utils/shimmer";


const Card = ({
                  id,
                  imgurl = "/static/logo/netflix.png",
                  title = "/",
                  href = "#",
                  size = "medium",
                  showNames
              }: {
    id: number,
    imgurl: string,
    title: string,
    href: string,
    size: string,
    showNames?: boolean
}) => {
    const [ImgUrl, setImgUrl] = useState(imgurl);
    const Imageerrorhandler = () => {
        console.error("error");
        setImgUrl("/static/logo/netflix.png");
    };
    const classmap = {
        large: "lgcards",
        medium: "mdcards",
        small: "smcards",
    };
    return (
        <motion.div
            className={`flex w-full  aspect-video rounded-lg relative shadow-lg ${classmap[size]}   `}
            initial={{
                zIndex: 10,
            }}
            whileHover={{
                zIndex: 20,
                scale: 1.1,
            }}

        >
            <Link
                href={href}
            >
                <Image
                    placeholder={"blur"}
                    blurDataURL={placeholderURL}
                    onError={Imageerrorhandler}
                    className="object-cover w-full"
                    src={ImgUrl}
                    width={600}
                    height={600}
                    alt={title + " Thumbail"}
                />
                {showNames && <span>{title}</span>}
            </Link>
        </motion.div>
    );
};

export default Card;
