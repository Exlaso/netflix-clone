import { Magic } from "magic-sdk";
import { OAuthExtension } from '@magic-ext/oauth';


const CreateMagic = () => {
  return ( typeof window !== "undefined" && new Magic(process.env.NEXT_PUBLIC_MAGIC_ID,{
    extensions: [new OAuthExtension()]
  }) )
}
export const magicClient = CreateMagic()

const VerifyUser = async (val) => {
  return await magicClient.auth.loginWithSMS({
    phoneNumber: "+91"+val
  });
};
export default VerifyUser;
