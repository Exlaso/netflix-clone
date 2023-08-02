import React from "react";
import Input from "./Input";

const LoginCard = () => {
  return (
    <div className="flex flex-col gap-10 p-16 rounded shadow-lg shadow-black bg-black/80">
      <h1 className="text-2xl"> Signin</h1>

      <Input />
      
    </div>
  );
};

export default LoginCard;
