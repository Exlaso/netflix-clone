import FavouriteVideos from "@/Components/FavouriteVideos";
import Nav from "@/Components/Nav/Nav";
import React from "react";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";


export const dynamic = "force-dynamic"

const page = async () => {
    const cookie = cookies().get("token");
    if (!cookie.value) {
        redirect("/login");
    }
    const res = await(await fetch(`${process.env.HOST_URL}/api/GetFavouritevideos?token=${cookie.value}`, {
        headers: {
            "cache-control": "no-cache",
        },
    })).json();
    return (
        <div>
            <Nav/>
            <div className="px-10 py-24">
                <div className="grid gap-4">

                    <h1 className="text-3xl">My List</h1>
                    <hr className="border-gray-700"/>
                    <FavouriteVideos data={res?.YTData}></FavouriteVideos>
                </div>
            </div>
        </div>
    );
};

export default page;
