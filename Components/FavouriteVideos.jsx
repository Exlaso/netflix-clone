"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const FavouriteVideos = () => {
  const [videodata, setVideodata] = useState([]);
  const FetchVideos = async () => {
    const res = await fetch("/api/GetFavouritevideos",{
      headers: {
        'cache-control': 'no-cache'
      }
    });
    const data = await res.json();
    setVideodata(data?.YTData);
  };

  useEffect(() => {
    FetchVideos();

    return () => {};
  }, []);
  return videodata.length === 0 ? <h2 className="text-xl">No Video Liked yet!</h2> : (
    <div className="flex flex-wrap gap-5">
      {videodata.map((e) => {
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
