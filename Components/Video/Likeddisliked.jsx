"use client";
import React, { useEffect, useState } from "react";
import Dislike_icon from "../Dislike_icon";
import Like_icon from "@/Components/Like_icon";
import { toast } from "react-toastify";
const Likeddisliked = ({ id }) => {
  const [LikeState, setLikeState] = useState(null);

  const UpdateLike = async (status) => {
    const res = await toast.promise( 
      fetch(`/api/UpdateLike?status=${status}&video_id=${id}`, {
        method: "PATCH",
      }),
      {
        pending: "Updating Information",
        success: "Information Updated 👌",
        error: "Something Went Wrong 🤯",
      }
    );
    console.log(await res.json());
  };

  const FetchLikeDetails = async () => {
    const res = await toast.promise(fetch(`/api/UpdateLike?video_id=${id}`), {
      pending: "Getting Like & Dislike Information",
      success: "Data Received 👌",
      error: "Something Went Wrong 🤯",
    });
    const status = await res.json();
    setLikeState(await status?.status);
    console.log(await status?.status);
  };
  const InsertVideo = async () => {
    const videostats = await fetch(`/api/VideoFetch?videoid=${id}`, {
      method: "POST",
    });
    console.log(await videostats.json());
  };
  useEffect(() => {
    InsertVideo();
    FetchLikeDetails();
    return () => {};
  }, [id]);

  return (
    <div className="flex w-full justify-evenly">
      <button
        onClick={() => {
          UpdateLike(1);
          setLikeState(1);
        }}
        disabled={LikeState === null ? true : false}
        
        type="button"
      className="flex flex-col items-center justify-center gap-3 disabled:opacity-20"
      >
        <div className="flex items-center justify-center border-2 border-white rounded-full w-14 h-14">
          <Like_icon selected={LikeState} />
        </div>
        I Like The Video
      </button>
      <button
       disabled={LikeState === null ? true : false}
        
        onClick={() => {
          UpdateLike(2);
          setLikeState(2);
        }}
        type="button"
      className="flex flex-col items-center justify-center gap-3 disabled:opacity-20"
      >
        <div className="flex items-center justify-center border-2 border-white rounded-full w-14 h-14">
          <Dislike_icon selected={LikeState} />
        </div>
        I Dislike The Video
      </button>
    </div>
  );
};

export default Likeddisliked;
