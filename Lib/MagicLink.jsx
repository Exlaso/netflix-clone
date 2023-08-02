import { Magic } from "magic-sdk";

const CreateMagic = () => {
  return ( typeof window !== "undefined" && new Magic(process.env.NEXT_PUBLIC_MAGIC_ID)
    )
}
export const magicClient = CreateMagic()

const VerifyUser = async (val) => {
  return await magicClient.auth.loginWithSMS({
    phoneNumber: "+91" + val,
  });
};

export default VerifyUser;
