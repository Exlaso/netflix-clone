"use client";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { useState } from "react";

const Card = ({
  imgurl = "/static/logo/netflix.png",
  title = "/",
  href = "#",
  size = "medium",
}) => {
  const [ImgUrl, setImgUrl] = useState(imgurl);
  const Imageerrorhandler = (e) => {
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
      className={`flex w-40 rounded-lg overflow-hidden relative shadow-lg  ${classmap[size]} `}
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
          onError={Imageerrorhandler}
          className="object-cover"
          src={ImgUrl}
          layout="fill"
          alt={title + " Thumbail"}
        />
      </Link>
    </motion.div>
  );
};

export default Card;
