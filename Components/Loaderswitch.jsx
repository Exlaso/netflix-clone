"use client";
import { magicClient } from "@/Lib/MagicLink";
import AnimatedText from "@/Utils/AnimatedText";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Loaderswitch = ({ children }) => {
  const router = useRouter();
  const [Isloading, setIsloading] = useState(true);

  const checklogstatus = async () => {
    const Isloged = await magicClient?.user?.isLoggedIn();
    // const Isloged = true;
    if (!Isloged) {
      router.push("/login");
    }
    setTimeout(() => {
      setIsloading(false);
    }, 500);
    return null;
  };
  useEffect(() => {
    checklogstatus();

    return () => {};
  }, []);

  return <body>{Isloading ? <AnimatedText Text="Netflix" /> : children}</body>;
};

export default Loaderswitch;
