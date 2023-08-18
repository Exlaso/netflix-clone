import FavouriteVideos from "@/Components/FavouriteVideos";
import Nav from "@/Components/Nav/Nav";
import React from "react";

const page = () => {
  return (
    <div>
      <Nav />
      <div className="px-10 py-24">
      <div className="grid gap-4">

        <h1 className="text-3xl">My List</h1>
        <hr className="border-gray-700"/>
        <FavouriteVideos></FavouriteVideos>
      </div>
      </div>
    </div>
  );
};

export default page;
