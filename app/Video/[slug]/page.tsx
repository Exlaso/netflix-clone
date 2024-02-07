import Nav from "@/Components/Nav/Nav";
import Likeddisliked from "@/Components/Video/Likeddisliked";
import React from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {prisma} from "@/Prisma/Prisma";
import {auth} from "@clerk/nextjs";
import {GetMovieByID} from "@/app/actions";
import {TMDB_IMAGE_PREFIX} from "@/Components/CardContainer";
import Image from "next/image";

export async function generateMetadata({params}) {
    const id:string = params.slug.toString().toLowerCase();
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

const Videoid = async ({params}) => {
    const Videoid = params.slug;

    const videodata = await GetMoviesByID(Videoid)
    const {userId} = auth();


    const res = await prisma.userstats.findUnique({
        where: {
            user_id_video_id: {
                user_id: userId,
                video_id: Videoid
            }
        },
        select: {
            favourite: true,
            watched: true
        }
    });
    if (!res?.watched) {
        prisma.userstats.create({
            data: {
                video: {
                    connectOrCreate: {
                        create: {
                            title: videodata.title,
                            Imgurl: videodata.poster_path,
                            description: videodata.overview,
                            videoID: Videoid
                        },
                        where: {
                            videoID: Videoid
                        }
                    }
                },
                user_id: userId,
                video_id: Videoid,
                watched: true,
                video_url: Videoid
            }
        }).then()
    }

    return (
        <>
            <Nav/>
            (
            <div className="flex flex-col items-center w-3/5 gap-10 py-20 mx-auto max-md:w-11/12 ">
                <ToastContainer
                    position="bottom-right"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <Image
                    width={700}
                    height={700}
                    alt={videodata.title}
                    className="w-full rounded-lg object-contain  aspect-video"
                    src={TMDB_IMAGE_PREFIX + "/" + videodata.poster_path}
                ></Image>
                <Likeddisliked id={Videoid} userid={userId} isliked={res?.favourite}/>
                <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">

                    <div className="flex flex-col gap-2 h-[50vh] overflow-scroll overflow-x-hidden p-3 ">
                        <p className="text-3xl font-bold">{videodata?.title}</p>
                        <p>{videodata.overview}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <ul>
                            <li>Genre : {videodata.budget}</li>
                            {/*<li>Upload Date: {videodata?.publishtime}</li>*/}
                            {/*<li>Views: {Convnumb(videodata?.viewcount)}</li>*/}
                        </ul>
                    </div>
                </div>
            </div>
            )
        </>
    );
};

export default Videoid;
