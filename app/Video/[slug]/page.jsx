import Nav from "@/Components/Nav/Nav";
import GetYoutubeById from "@/Data/GetYoutubeById";
import Convnumb from "@/Lib/Convnumb";
import React from "react";

const Videoid = async ({ params }) => {


  const video = {
    title : "Exlaso",
    publishtime :" Kale ",
    description: "Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 ",
    channeltitle : "Cham kau",
    viewcount: 1000
  }
  const id = params.slug;
  const videodata = await GetYoutubeById(id);
  
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center w-3/5 gap-10 py-20 mx-auto max-md:w-11/12 ">
        <iframe
   
          className="w-full border border-gray-700 rounded-lg shadow-sm shadow-white aspect-video"
          src={`https://www.youtube.com/embed/${videodata?.id}?autoplay=0&controls=0&rel=1`}
        ></iframe>
        <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
          {" "}
          <div className="flex flex-col gap-2 h-[50vh] overflow-scroll overflow-x-hidden p-3 ">
            <p className="text-3xl font-bold"> 
            {videodata?.title}
            </p>
            <p>
             {videodata?.description}
            </p>
          </div>
          <div className="flex flex-col gap-2">
           <ul>
            <li>Channel Name: {videodata?.channeltitle}</li>
            <li>Upload Date: {videodata?.publishtime}</li>
            <li>Views: {Convnumb(videodata?.viewcount)}</li>
           </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videoid;
