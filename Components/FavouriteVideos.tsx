"use client";
import React from "react";
import Card from "./Card";
import {getFavouriteVideosType} from "@/app/actions";
import {TMDB_IMAGE_PREFIX} from "@/Components/CardContainer";


const FavouriteVideos = ({data}: { data: getFavouriteVideosType }) => {

    return data?.length === 0 ? (
        <h2 className="text-xl">No Video Liked yet!</h2>
    ) : (
        <div className="flex flex-wrap gap-5">
            {data?.map((e) => {
                return (
                    <Card
                        title={e.video.title}
                        key={e.video.id}
                        id={e.video.id}
                        href={`/Video/${e.video.id}`}
                        imgurl={TMDB_IMAGE_PREFIX + "/" + e.video.Imgurl}
                        size="small"
                    ></Card>
                );
            })}
        </div>
    );
};

export default FavouriteVideos;
