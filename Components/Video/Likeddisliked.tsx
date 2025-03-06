"use client";
import React, {useEffect, useState} from "react";
import Dislike_icon from "../Dislike_icon";
import Like_icon from "@/Components/Like_icon";
import {updateLike} from "@/app/actions";
import {useMutation} from "@tanstack/react-query";

const Likeddisliked = ({id, userid, isliked}: { userid: string, id: string, isliked?: boolean }) => {
    const [LikeState, setLikeState] = useState<boolean | null>(isliked);
    const handleLike = () =>  setLikeState(prev => (prev === true) ? null : true)
    const handleDislike = () => setLikeState(prev => (prev === false) ? null : false)

    const mutate  = (v,{onSuccess}:{onSuccess:() => void}) => {
        onSuccess();
    }

    useEffect(() => {
        const handleStatus = async () => {
            return await updateLike(userid, LikeState, id)
        }
        const timeoutid = setTimeout(handleStatus, 800);
        return () => {
            clearTimeout(timeoutid)
        }

    }, [LikeState, id, userid])

    return (
        <div className="flex w-full justify-evenly">
            <button
                onClick={() => {
                    mutate(undefined,{onSuccess:handleLike})
                }}

                type="button"
                className="flex flex-col items-center justify-center gap-3 disabled:opacity-20"
            >
                <div className="flex items-center justify-center border-2 border-white rounded-full w-14 h-14">
                    <Like_icon selected={LikeState}/>
                </div>
                I Like The Video
            </button>
            <button

                onClick={() => {
                    mutate(undefined,{onSuccess:handleDislike})
                }}
                type="button"
                className="flex flex-col items-center justify-center gap-3 disabled:opacity-20"
            >
                <div className="flex items-center justify-center border-2 border-white rounded-full w-14 h-14">
                    <Dislike_icon selected={LikeState}/>
                </div>
                I Dislike The Video
            </button>
        </div>
    );
};

export default Likeddisliked;
