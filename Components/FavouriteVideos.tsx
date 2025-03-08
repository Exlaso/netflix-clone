"use client";
import React from "react";
import Card from "./Card";
import {TMDB_IMAGE_PREFIX} from "@/Components/CardContainer";
import {getFavouriteVideosType} from "@/app/browse/my-list/page";


const FavouriteVideos = ({data}: { data: getFavouriteVideosType }) => {

    return data?.length === 0 ? (
        <h2 className="text-xl">No Video Liked yet!</h2>
    ) : (
        <div className="grid grid-cols-6 gap-5">
            {data?.map((e) => {
                return (
                    <Card
                        title={e.video.title}
                        key={e.video.id}
                        id={e.video.id}
                        href={`/Video/${e.video.videoID}`}
                        imgurl={TMDB_IMAGE_PREFIX + "/" + e.video.Imgurl}
                        size="small"
                        showNames={true}
                    ></Card>
                );
            })}
        </div>
    );
};

export default FavouriteVideos;
