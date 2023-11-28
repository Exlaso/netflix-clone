import Nav from "@/Components/Nav/Nav";
import Likeddisliked from "@/Components/Video/Likeddisliked";
import GetYoutubeById from "@/Data/GetYoutubeById";
import Convnumb from "@/Lib/Convnumb";
import AnimatedText from "@/Utils/AnimatedText";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.slug.toString().toLowerCase();
  return {
    title: `Netflix/${id}`,
  };
}

const Videoid = async ({ params }) => {
  const Videoid = params.slug;
  const videodata = await GetYoutubeById(Videoid);

  return (
    <>
      <Nav />
      {videodata === null ? (
        <AnimatedText
          Text="Netflix"
          duration={2000}
        />
      ) : (
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
          <iframe
            className="w-full border border-gray-700 rounded-lg shadow-sm shadow-white aspect-video"
            src={`https://www.youtube.com/embed/${videodata?.id}?autoplay=0&controls=0&rel=1`}
          ></iframe>
          <Likeddisliked id={Videoid} />
          <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
            {" "}
            <div className="flex flex-col gap-2 h-[50vh] overflow-scroll overflow-x-hidden p-3 ">
              <p className="text-3xl font-bold">{videodata?.title}</p>
              <p>{videodata?.description}</p>
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
      )}
    </>
  );
};

export default Videoid;
