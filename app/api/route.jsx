  import { magicAdmin } from "@/Lib/MagicServer";
  import { CreateNewuser, isNewUser } from "@/Lib/db/hasura";
  import { NextResponse } from "next/server";
  const jwt = require("jsonwebtoken");
  export const POST = async (req) => {

    try {
      const header = req?.headers?.get("authorization");
      const didtoken = header.substring(7);
      const metadata = await magicAdmin.users.getMetadataByToken(didtoken)
      const JwtToken = jwt.sign(
        {
          ...metadata,
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["user", "admin"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": `${metadata.issuer}`,
          },
        },
        process.env.JWT_KEY
      );
      const IsNewUser = await isNewUser(JwtToken, metadata.issuer);
      if (IsNewUser) {
        const CreateNewUserMutation = await CreateNewuser(JwtToken, metadata);
        const jsonResponse = NextResponse.json(
          { Newuser: "New User" },
          {
            status: 200,
            headers: {
              "Set-Cookie": `token=${JwtToken}; Path=/; Expires=Tue, 22 Aug 2023 11:34:37 GMT; Max-Age=604800`,
            },
          }
        );
        return jsonResponse;
      } else {
        const jsonResponse = NextResponse.json(
          { Newuser: "Old User" },
          {
            status: 200,
            headers: {
              "Set-Cookie": `token=${JwtToken}; Path=/; Expires=Tue, 22 Aug 2023 11:34:37 GMT; Max-Age=604800`,
            },
          }
        );
        return jsonResponse;
      }
    } catch (error) {
      console.error("Error in Api ,", error);
      return NextResponse.json(
        { Message: "Internal Server Error", error },
        { status: 500 }
      );
    }
  };
