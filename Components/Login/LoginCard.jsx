import React from "react";
import Input from "./Input";

const LoginCard = () => {
  return (
    <div className="flex flex-col gap-5 p-16 rounded shadow-lg shadow-black bg-black/80">
      <h1 className="text-2xl"> Signin</h1>

      <Input />
      <h3 className="text-center">OR</h3>
      <button type="button" className="p-2 rounded bg-slate-800">Continue as a guest</button>
    </div>
  );
};

export default LoginCard;
