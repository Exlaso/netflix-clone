"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import VerifyUser from "@/Lib/MagicLink";
import { motion } from "framer-motion";
const Input = () => {
  const router = useRouter();
  const [Message, setMessage] = useState("");
  const [Email, setEmail] = useState("");
  const [Isloading, setIsloading] = useState(false)
  const InputHandler = (e) => {
    setEmail(e.target.value);
    setMessage("");
  };
  const FormsubmitHandler = async (e) => {
    setIsloading(true)
    e.preventDefault();
    if (Email.length === 0) {
      setMessage("Enter the Valid Phone Number");
      setIsloading(false)
    } else {
      try {
        const DID = await VerifyUser(Email)
        // const DID = true;
     
      if (DID) {
        router.push("/");
        setIsloading(false)
      }
    } catch (error) {
      console.error(error);
      setIsloading(false)
    }
    }
  };
  return (
    <form
      action=""
      className="flex flex-col gap-2"
      onSubmit={FormsubmitHandler}
    >
      <label
        htmlFor="email"
        className="text-md"
      >
        Phone Number
      </label>
      <input
        type="number"
        value={Email}
        id="email"
        className="p-2 duration-150 bg-transparent border border-t-0 border-b-2 border-l-0 border-r-0 border-white outline-none "
        placeholder="9106011023"
        onChange={InputHandler}
      />
      <p>{Message}</p>
      <motion.button
      initial={{
        opacity:1
      }}
      whileHover={{
        opacity: .8
      }}
      whileTap={{
        scale: .9
      }}
        type="submit" 
      > 
      <div className="p-2 rounded bg-slate-800">

      {Isloading? <div className="custom-loader"></div>:"Verify"} 
      </div>
      </motion.button>
    </form>
  );
};

export default Input;
