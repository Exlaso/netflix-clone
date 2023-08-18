import GetYoutubeById from "@/Data/GetYoutubeById";
import { LikedVideos } from "@/Lib/db/hasura";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    if (!req.cookies.get("token")) {
      return NextResponse.json({ Error: "Cookie Not Found" }, { status: 403 });
    }
    const token = req.cookies.get("token").value;
    const FetchedVideos = await LikedVideos(token);
    const YTData = [];
    const tranlatetoytdetails = await FetchedVideos.map(async (video) => {
      const Videodata = await GetYoutubeById(video.video_id);

      YTData.push(Videodata);
      return video.video_id;
    });

    return Promise.all(tranlatetoytdetails).then(() => {
      return NextResponse.json({ success: true, YTData });
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      success: false,
      "Error At": "/api/GetFavouritevideos",
      error: err?.message,
    });
  }
};
