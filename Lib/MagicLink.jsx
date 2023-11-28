import { Magic } from "magic-sdk";
import { OAuthExtension } from '@magic-ext/oauth';

// import {Magic as MagicAdmin} from "@magic-sdk/admin"

// const Magicadmin = new MagicAdmin(process.env.NEXT_PUBLIC_MAGIC_SECRET_KEY);
const CreateMagic = () => {
  return ( typeof window !== "undefined" && new Magic(process.env.NEXT_PUBLIC_MAGIC_ID,{
    extensions: [new OAuthExtension()]
  }) )
}
export const magicClient = CreateMagic()


const VerifyUser = async (val) => {
  return magicClient.auth.loginWithSMS({
    phoneNumber: "+91" + val
  });
};
export default VerifyUser;
