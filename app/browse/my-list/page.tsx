import Nav from "@/Components/Nav/Nav";
import React from "react";
import {auth} from "@clerk/nextjs";
import {getFavouriteVideos} from "@/app/actions";
import FavouriteVideos from "@/Components/FavouriteVideos";


export const dynamic = "force-dynamic"

const page = async () => {
    const {userId} = auth()
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
