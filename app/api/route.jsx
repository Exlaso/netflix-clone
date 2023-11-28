import {magicAdmin} from "@/Lib/MagicServer";
import {CreateNewuser, isNewUser} from "@/Lib/db/hasura";
import {NextResponse} from "next/server";

const jwt = require("jsonwebtoken");
export const POST = async (req) => {

    try {
        const tokenwithbearer = req?.headers?.get("authorization");
        const didtoken = tokenwithbearer.substring(7);
        const metadata = await magicAdmin?.users?.getMetadataByToken(didtoken)
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
            await CreateNewuser(JwtToken, metadata);
            return NextResponse.json(
                {Newuser: "New User"},
                {
                    status: 200,
                    headers: {
                        "Set-Cookie": `token=${JwtToken}; Path=/; `,
                    },
                }
            );
        } else {
            const jsonResponse = NextResponse.json(
                {Newuser: "Old User"},
                {
                    status: 200,
                    headers: {
                        "Set-Cookie": `token=${JwtToken}; Path=/; `,
                    },
                }
            );
            return jsonResponse;
        }
    } catch (error) {
        console.error("Error in Api ,", error);
        return NextResponse.json(
            {Message: "Internal Server Error", error},
            {status: 500}
        );
    }
};
