
const GetYoutubeById = async (id) => {
  const youtube_api = process.env.youtube_api2;
  const baseurl = new URL("https://youtube.googleapis.com/youtube/v3/videos");
  baseurl.searchParams.set("part", "snippet,contentDetails,statistics");
  baseurl.searchParams.set("key", youtube_api);
  baseurl.searchParams.set("id", id);

  try {
    const res = await fetch(baseurl.href);

    const data = await res.json();
    console.log({data})
    const arrofdata =  data?.items?.map((e) => {
      return {
        title: e?.snippet?.title,
        description: e?.snippet?.description,
        Imgurl: e?.snippet?.thumbnails?.maxres?.url,
        viewcount: e?.statistics?.viewCount,
        publishtime: e?.snippet?.publishedAt,
        id: e?.id,
      };
    });

    return arrofdata[0]
  } catch (err) {
    console.error(err);
  }
};

export default GetYoutubeById;
