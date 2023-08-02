
import { magicClient } from '@/Lib/MagicLink';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const DropDown = () => {
const router = useRouter();
    const [isDropdownopen, setIsDropdownopen] = useState(false); 
    const [Username, setUsername] = useState('')


    const HandleSignout = async e => {
      e.preventDefault();
 try {
        router.push('./login')

      } catch (error) {
        console.error(error);
      }
    }


      const Getmetadata = async() =>{
        try {
          const getmetadeta =  await magicClient.user.getInfo();
          const getphonenumber = getmetadeta.phoneNumber;
          setUsername(getphonenumber)
          return ()=>{}
        } catch (err) {
          console.error(err);
          return ()=>{}
        }
      }
      Getmetadata();
      // }, [])
      


    const dropdownhandler = () => {
      setIsDropdownopen((e) => !e);
    };
  return (
    <nav className="relative flex flex-col gap-3">
    <div
      className="flex"
      onClick={dropdownhandler}
    >
      <button type="button">
        <p className="block tshadow max-sm:hidden ">{Username}</p>
      </button>{" "}
      <Image
        src={"/static/icons/dropdown.svg"}
        className="drop-shadow-lg shadow-black"
        height={25}
        width={25}
        alt="drop down"
      />
    </div>
    {isDropdownopen && (
      <div className={`absolute top-[150%] right-0`}>
        <Link
          className="p-3 rounded-md bg-slate-500 w-max whitespace-nowrap"
          href={"./login"}
        onClick={HandleSignout}
        >
          Sign out from Netflix
        </Link>
      </div>
    )}
  </nav>
  )
}

export default DropDown