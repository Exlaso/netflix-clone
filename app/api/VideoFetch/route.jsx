import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { InsertVideo, IsVideoExists, WatchedVideos } from "@/Lib/db/hasura";
import GetYoutubeById from "@/Data/GetYoutubeById";
export const POST = async (req) => {
  try {
    if (!req.cookies.get("token")) {
         return NextResponse.json({ Error: "Cookie Not Found" }, { status: 403 });
    } else {
      const token = req.cookies.get("token").value;
      const Decoded_token = jwt.verify(token, process.env.JWT_KEY);
      const issuer = Decoded_token.issuer;
      const { searchParams } = new URL(req.url);
      const videoid = searchParams.get("videoid");
      const res = await IsVideoExists(token, issuer, videoid);

      if (!res) {
        const InsertVideostatus = await InsertVideo(token, issuer, videoid);

        return NextResponse.json({ VideoInserted: InsertVideostatus });
      } else {
        return NextResponse.json({ VideoExists: res });
      }
    }
  } catch (error) {
    return NextResponse.json(
      { "Error Occured at api/VideoFetch": error?.message },
      { status: 500 }
    );
  }
};

export const GET = async (req) => {
  try {
    if (!req.cookies.get("token")) {
         return NextResponse.json({ Error: "Cookie Not Found" }, { status: 403 });
    }
    const token = req.cookies.get("token").value;
    const FetchedVideos = await WatchedVideos(token);
    const YTData = [];
    const tranlatetoytdetails = await FetchedVideos.map(async (video) => {

      const Videodata = await GetYoutubeById(video.video_id);

      YTData.push(Videodata);
      return video.video_id 
    });

    return Promise.all(tranlatetoytdetails).then(() => {
      return NextResponse.json({ success: true,YTData });
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { "Error Occured at api/VideoFetch[GET]": error?.message },
      { status: 500 }
    );
  }
};
