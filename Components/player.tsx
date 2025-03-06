"use client"
import YouTubePlayer from "react-youtube";
import React from "react";


export const Player = ({videoId}: { videoId: string }) => <YouTubePlayer

    videoId={videoId}
opts={{
   playerVars: {
       autoplay: 1
   }
}}
/>