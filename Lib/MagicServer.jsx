const { Magic } = require("@magic-sdk/admin");

export const magicAdmin = new Magic(process.env.NEXT_PUBLIC_Magic_server_key);