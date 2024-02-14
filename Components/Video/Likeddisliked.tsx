"use client";
import React, {useEffect, useState} from "react";
import Dislike_icon from "../Dislike_icon";
import Like_icon from "@/Components/Like_icon";
import {updateLike} from "@/app/actions";

const Likeddisliked = ({id, userid, isliked}: { userid: string, id: string, isliked: boolean }) => {
    const [LikeState, setLikeState] = useState<1 | 2 | null>((() => {

        if (!isliked) {
            return null
        } else {
            return isliked ? 1 : 2
        }
    })());
    console.log("=================Likeddisliked========================")
    console.log(isliked, " server")
    console.log(LikeState, " client")
    console.log("======================================================")

    useEffect(() => {

        const Status = () => {
            updateLike(userid, (() => {
                if (!LikeState) {
                    return null
                } else {
                    return LikeState === 1;
                }
            })(), id)
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
                    if (LikeState !== 1) {

                        setLikeState(1);
                    } else {
                        setLikeState(null);
                    }
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
                    if (LikeState !== 2) {

                        setLikeState(2);
                    } else {
                        setLikeState(null);
                    }
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
