'use server'
import Nav from "@/Components/Nav/Nav";
import React from "react";


export async function getStaticProps(){


  // const res = await fetch(URL)
  // const data = await res.json()



  return {
    props:{
      video
    },
    revalidate: 10
  }
}
get

const Videoid = ({ params }) => {


  const video = {
    title : "Exlaso",
    publishtime :" Kale ",
    description: "Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 ",
    channeltitle : "Cham kau",
    viewcount: 1000
  }

console.log(video);
  const id = params.slug;
  return (
    <>
      <Nav />
      <div className="w-3/5  max-md:w-11/12 mx-auto  flex items-center py-20 flex-col gap-10  ">
        <iframe
   
          className="shadow-sm border border-gray-700 rounded-lg shadow-white w-full aspect-video"
          src={"https://www.youtube.com/embed/tgbNymZ7vqY"}
        ></iframe>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
          {" "}
          <div className="flex gap-2 flex-col">
            <p>
            {video.title}
            </p>
            <p>
             {video.description}
            </p>
          </div>
          <div className="flex gap-2 flex-col">
           <ul>
            <li>Channel Name: {video.channeltitle}</li>
            <li>Upload Date: {video.publishtime}</li>
            <li>Views: {video.viewcount}</li>
           </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videoid;
