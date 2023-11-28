"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const FavouriteVideos = ({data}) => {
  const [videodata, setVideodata] = useState(data);



  return videodata?.length === 0 ? (
    <h2 className="text-xl">No Video Liked yet!</h2>
  ) : (
    <div className="flex flex-wrap gap-5">
      {videodata?.map((e) => {
        return (
          <Card
            title={e.title}
            key={e.id}
            href={`/Video/${e.id}`}
            imgurl={e.Imgurl}
            size="small"
          ></Card>
        );
      })}
    </div>
  );
};

export default FavouriteVideos;
