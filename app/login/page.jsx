import LoginCard from "@/Components/Login/LoginCard";
import Nav from "@/Components/Nav/Nav";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="relative h-screen">
      <Image
        src={"/static/loginbg.jpg"}
        alt="netflix background "
        className="object-cover -z-30"
        layout="fill"
      />
      <Nav logoonly={true}  />
    <div className="flex items-center justify-center w-full h-full">
    <LoginCard />  
    </div>
    </div>
  );
};

export default page;
