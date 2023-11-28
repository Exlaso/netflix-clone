import Banner from "@/Components/Banner";
import CardContainer from "@/Components/CardContainer";
import Nav from "@/Components/Nav/Nav";
import WatchAgainContainer from "@/Components/WatchAgainContainer";
import { Fetch_youtube_data } from "@/Data/Data_supply";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";



export default async function Home() {

  const Travel = await Fetch_youtube_data("4k Japan", 15);
  const DolbyVision = await Fetch_youtube_data("4k Dolby Vision ", 15);
  const Dubai_Fireworks = await Fetch_youtube_data("Dubai Firework 4k", 15);
  const One_Piece = await Fetch_youtube_data("one piece", 15);
    const token = cookies().get("token");

  return (
    <main>
      <Nav Username={"Exlaso53@gmail.com"} /> 
      <Banner 
      data={[{
        Title: "Better Call Saul",
        id:"Qz3u06eXf0E",
        subtitle:"by Vince Gilligan",
        Imgurl:"/static/Movies_and_series_thumbnails/bettercallsaul.jpg"
      }]} 
      />
      <CardContainer
        title={"Dolby Vision"}
        data={DolbyVision}
        size="large"
      />
      <CardContainer
        title={"Travel"}
        data={Travel}
        size="small"
      />
        {/*{token && <WatchAgainContainer/>}*/}
      <CardContainer
        title={"Dubai Fireworks"}
        data={Dubai_Fireworks}
        size="medium"
      />
      <CardContainer
        title={"One Piece"}
        data={One_Piece}
        size="small"
      />
    </main>
  );
}
