import {NextResponse} from "next/server";
import {cookies} from "next/headers";

export const DELETE = async (req) => {
    try {


        cookies().delete("token")


        return NextResponse.json("Successfully signed out")
    } catch (error) {
        console.error("Error in app/api/Signout/route.js: " + error)
        if (error instanceof Error) {
            return NextResponse.json({
                message: error.message,
                error: true,
            })


        }
    }


}