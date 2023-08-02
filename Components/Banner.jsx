"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Banner = ({
  data}) => {
  const { Title, subtitle, Imgurl, id } = data[0];
  return (
    <div className="w-full h-[90vh] relative ">
      <div className="absolute z-10 w-full h-full">
        <div className="flex flex-col justify-center h-full gap-3 px-10 mt-8 w-2/5 max-md:w-3/5">
          <div className="flex items-center ">
            <div className="text-6xl font-bold text-red-600 ">N</div>
            <div>S E R I E S</div>
          </div>

          <h1 className="text-2xl font-extrabold leading-8 text-white tshadow ">
            {Title}
          </h1>
          <h1 className="text-xl leading-7 text-white tshadow">{subtitle}</h1>
          <Link href={`/Video/${id}`}>
            <motion.button
              whileTap={{
                scale: 0.95,
              }}
              className="flex items-center justify-center px-5 py-2 text-black bg-white border border-gray-500 rounded-lg w-fit"
              type="button"
            >
              <Image
                alt="play icon"
                src="/static/icons/play.svg"
                height={25}
                width={25}
              />
              <span> Play</span>
            </motion.button>
          </Link>
        </div>
      </div>
      <div
        className="absolute w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${Imgurl})` }}
      ></div>
    </div>
  );
};

export default Banner;
