// import yt_data from "@/Data/Raw/yt_data";
export const Large_content = () => {
  return [
    {
      imgurl: "/static/Movies_and_series_thumbnails/Breakingbad_1.jpg",
      title: "Breaking bad",
      href: "/",
    },
    {
      imgurl: "/static/Movies_and_series_thumbnails/pathan.jpg",
      title: "Pathaan",
      href: "/",
    },
    {
      imgurl: "/static/Movies_and_series_thumbnails/Breakingbad_1.jpg",
      title: "Breaking bad",
      href: "/",
    },
  ];
};

export const Fetch_youtube_data = async (
  query = " ",
  noofres = 25,
) => {
  const youtube_api = process.env.youtube_api2;
  const baseurl = new URL("https://youtube.googleapis.com/youtube/v3/search?");
  baseurl.searchParams.set("videoDefinition", "high");
  baseurl.searchParams.set("part", "snippet");
  baseurl.searchParams.set("regionCode", "UK");
  baseurl.searchParams.set("videoDuration", "long");
  baseurl.searchParams.set("type", "video");
  baseurl.searchParams.set("order", "viewcount");
  baseurl.searchParams.set("key", youtube_api);
  baseurl.searchParams.set("q", query);
  baseurl.searchParams.set("maxResults", noofres);
  console.log(baseurl.href);

  try {
    const res = await fetch(baseurl.href);
    const data = await res.json();
    return data?.items.map((e) => {
      return {
        Title: e?.snippet?.title,
        Imgurl: e?.snippet?.thumbnails?.high?.url,
        id: e?.id?.videoId,
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};
