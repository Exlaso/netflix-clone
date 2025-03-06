import Nav from "@/Components/Nav/Nav";
import React from "react";
import {auth} from "@clerk/nextjs/server";
import FavouriteVideos from "@/Components/FavouriteVideos";
import {prisma} from "@/Prisma/Prisma";
import {Prisma} from "@prisma/client";

const getFavouriteVideos = async (user_id: string) => {
    try {
        return (await prisma.userstats.findMany({
            where: {
                user_id,
                favourite: true,
            },
            include: {
                video: true
            }
        }))
    } catch (error) {
        if (error instanceof Error) {
            console.error(error)
            return []


        }
    }
}
export type getFavouriteVideosType = Prisma.PromiseReturnType<typeof getFavouriteVideos>
export const dynamic = "force-dynamic"

const page = async () => {
    const {userId} = await auth()
    const favouritedVideos = await getFavouriteVideos(userId);
    return (
        <div>
            <Nav/>
            <div className="px-10 py-24">
                <div className="grid gap-4">

                    <h1 className="text-3xl">My List</h1>
                    <hr className="border-gray-700"/>
                    <FavouriteVideos  data={favouritedVideos}/>
                </div>
            </div>
        </div>
    );
};

export default page;
