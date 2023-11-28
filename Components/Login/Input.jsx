"use client";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import VerifyUser from "@/Lib/MagicLink";
import {motion} from "framer-motion";

const Input = () => {
    const router = useRouter();
    const [Message, setMessage] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [Isloading, setIsloading] = useState(false);
    const InputHandler = (e) => {
        setphoneNumber(e.target.value);
        setMessage("");
    };
    const FormsubmitHandler = async (e) => {
        setIsloading(true);
        e.preventDefault();
        if (phoneNumber.length === 0) {
            setMessage("Enter the Valid Phone Number");
            setIsloading(false);
        } else {
            try {
                const DID = await VerifyUser(phoneNumber);
                // const DID = true;

                if (DID) {
                    const res = await fetch('/api', {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${DID}`,
                            "Content-Type": "application/json"
                        }
                    })
                    await res.json()
                    router.push("/");
                    setIsloading(false);
                }
            } catch (error) {
                console.error(error);
                setIsloading(false);
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
                htmlFor="phoneNumber"
                className="text-md"
            >
                Phone Number
            </label>
            <input
                type="text"
                value={phoneNumber}
                id="phoneNumber"
                className="p-2 duration-150 bg-transparent border border-t-0 border-b-2 border-l-0 border-r-0 border-white outline-none "
                placeholder="Phone no."
                onChange={InputHandler}
            />
            <p>{Message}</p>
            <motion.button
                initial={{
                    opacity: 1,
                }}
                whileHover={{
                    opacity: 0.8,
                }}
                whileTap={{
                    scale: 0.9,
                }}
                type="submit"
            >
                <div className="p-2 rounded bg-slate-800">
                    {Isloading ? <div className="custom-loader"></div> : "Verify"}
                </div>
            </motion.button>
            <span className="text-center">We only Support Passwordless Login</span>
            <span className="text-center">Without Any account Creation</span>
        </form>
    );
};

export default Input;
