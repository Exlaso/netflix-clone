"use client";
import React, {useEffect, useState} from "react";
import Dislike_icon from "../Dislike_icon";
import Like_icon from "@/Components/Like_icon";
import {updateLike} from "@/app/actions";

const Likeddisliked = ({id, userid, isliked}: { userid: string, id: string, isliked: boolean }) => {
    const [LikeState, setLikeState] = useState<boolean | null>(isliked);

    useEffect(() => {

        const Status = () => {
            updateLike(userid, LikeState, id)
        }
        const timeoutid = setTimeout(Status, 800);
        return () => {
            clearTimeout(timeoutid)
        }

    }, [LikeState, id, userid])

    return (
        <div className="flex w-full justify-evenly">
            <button
                onClick={() => {
                    setLikeState(true);
                }}

                type="button"
                className="flex flex-col items-center justify-center gap-3 disabled:opacity-20"
            >
                <div className="flex items-center justify-center border-2 border-white rounded-full w-14 h-14">
                    <Like_icon selected={LikeState === null ? 0 : LikeState ? 1 : 0}/>
                </div>
                I Like The Video
            </button>
            <button

                onClick={() => {
                    setLikeState(false);
                }}
                type="button"
                className="flex flex-col items-center justify-center gap-3 disabled:opacity-20"
            >
                <div className="flex items-center justify-center border-2 border-white rounded-full w-14 h-14">
                    <Dislike_icon selected={LikeState === null ? 0 : LikeState ? 0 : 1}/>
                </div>
                I Dislike The Video
            </button>
        </div>
    );
};

export default Likeddisliked;
