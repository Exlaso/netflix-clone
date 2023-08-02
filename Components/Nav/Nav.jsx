"use client";

import React from "react";
import Netflixlogo from "./Netflixlogo";
import DropDown from "./dropdown";
import Listnav from "./Listnav";

const Nav = ({ logoonly = false }) => {




  return (
    <div className="fixed z-30 flex items-center justify-between w-full gap-4 px-3 from-black bg-gradient-to-b ">
      <div className="flex items-center tshadow">
        <Netflixlogo />
        {logoonly ? "" : <Listnav />}
      </div>
      {logoonly ? "" : <DropDown Username={'Username'} />}
    </div>
  );
};

export default Nav;
