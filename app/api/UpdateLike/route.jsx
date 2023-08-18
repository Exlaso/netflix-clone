import { DislikeVideo, GetLikeDetails, LikeVideo } from "@/Lib/db/hasura";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export const PATCH = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const video_id = searchParams.get("video_id");

    if (status === null || status === undefined) {
      throw new Error("Invalid Status");
    } else if (parseInt(status) < 1 || parseInt(status) > 2) {
      throw new Error("Unknown Status");
    } else if (video_id === null || video_id === undefined) {
      throw new Error("Video Id Not Found");
    } else if (!request.cookies.get("token")) {
      throw new Error("Cookie Not Found");
    }

    const token = request.cookies.get("token").value;
    const Decoded_token = jwt.verify(token, process.env.JWT_KEY);
    const user_id = Decoded_token.issuer;
    if (parseInt(status) === 1) {
      const res = await LikeVideo(token, user_id, video_id);
      return NextResponse.json({ status: "Success", Affectedrows: res });
    } else {
      const res = await DislikeVideo(token, user_id, video_id);
      return NextResponse.json({ status: "Success", Affectedrows: res });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {status:"Failure", Message: "Error at UpdateLike", Error_Message: error.message },
      { status: 400 }
    );
  }
};


export const GET = async (req) => {
    try {
      if (!req.cookies.get("token")) {
        return NextResponse.json({ Error: "Cookie Not Found" }, { status: 403 });
      } else {
        const token = req.cookies.get("token").value;
        const Decoded_token = jwt.verify(token, process.env.JWT_KEY);
        const issuer = Decoded_token.issuer;
        const { searchParams } = new URL(req.url);
        const videoid = searchParams.get("video_id");
        if (!videoid) {
          throw new Error("VideoId is Required")
          
        }
        const LikeDetails = await GetLikeDetails(token, issuer, videoid);
  
        return NextResponse.json({status:LikeDetails});
      }
    } catch (error) {
      return NextResponse.json(
        { "Error Occured at api/UpdateLike[GET]": error?.message },
        { status: 500 }
      );
    }
  };
