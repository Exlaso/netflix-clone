import Nav from "@/Components/Nav/Nav";
import Likeddisliked from "@/Components/Video/Likeddisliked";
import React from "react";
import {prisma} from "@/Prisma/Prisma";
import {auth} from "@clerk/nextjs/server";
import {GetMovieByID} from "@/app/actions";
import {searchYouTubeVideo} from "@/Data/getYoutubeVideo";
import {Player} from "@/Components/player";


export const dynamic = "force-dynamic"
export async function generateMetadata(props) {
    const params = await props.params;
    const id: string = params.slug.toString().toLowerCase();
    return {
        title: `Netflix/${id}`,
    };
}

const GetMoviesByID = async (ID: string): Promise<GetMovieByID> => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + process.env.TMDB_SECRET
        }
    };
    try {
        return await (await (await fetch(`http://api.themoviedb.org/3/movie/${ID}`, options)).json())
    } catch (error) {
        console.error('error:' + error)
        if (error instanceof Error) {
            return null

        }
    }

}

const Videoid = async props => {
    const params = await props.params;
    const videoID = params.slug;

    const videoData = await GetMoviesByID(videoID)
    const video = (await searchYouTubeVideo(videoData?.title))?.at(0)
    console.log({video})
    const {userId} = await auth();


    const res = await prisma.userstats.findUnique({
        where: {
            user_id_video_id: {
                user_id: userId,
                video_id: videoID
            }
        },
        select: {
            favourite: true,
            watched: true
        }
    });
    const totalLikes = await prisma.userstats.count({
        where: {
            favourite: true,
            video_id: videoID
        }
    });
    if (!res?.watched) {
        await prisma.userstats.create({
            data: {
                video: {
                    connectOrCreate: {
                        create: {
                            title: videoData.title,
                            Imgurl: videoData.poster_path ?? "",
                            description: videoData.overview,
                            videoID: videoID
                        },
                        where: {
                            videoID: videoID
                        }
                    }
                },
                user_id: userId,
                video_id: videoID,
                watched: true,
                video_url: videoID
            }
        })
    }

    return (
        <>
            <Nav/>
            (
            <div className="flex flex-col items-center w-3/5 gap-10 py-20 mx-auto max-md:w-11/12  ">
                <Player videoId={video.id}  />
                <Likeddisliked id={videoID} userid={userId} isliked={res?.favourite}/>
                <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">

                    <div className="flex flex-col gap-2 h-[50vh] overflow-scroll overflow-x-hidden p-3 ">
                        <p className="text-3xl font-bold">{videoData?.title}</p>
                        <p>{videoData.overview}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <ul>
                            <li>Likes: {totalLikes}</li>
                            <li>Release Date: {new Date(videoData.release_date).toLocaleString("IN", {
                                dateStyle: "medium"
                            })}</li>
                        </ul>
                    </div>
                </div>
            </div>
            )
        </>
    );
};

export default Videoid;

