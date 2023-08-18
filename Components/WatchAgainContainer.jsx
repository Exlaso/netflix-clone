"use client";
import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";

const WatchAgainContainer = () => {
  const [videodata, setVideodata] = useState([]);
  const FetchVideos = async () => {
    const res = await fetch("/api/VideoFetch");
    const data = await res.json();
    setVideodata(data?.YTData);
  };

  useEffect(() => {
    FetchVideos();

    return () => {};
  }, []);
  return videodata.length === 0 ? null : (
    <CardContainer
      title={"Watch again"}
      data={videodata}
      size="small"
    />
  );
};

export default WatchAgainContainer;
