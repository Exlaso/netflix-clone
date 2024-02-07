import CardContainer from "@/Components/CardContainer";
import Nav from "@/Components/Nav/Nav";
import Banner from "@/Components/Banner";
import {GetMoviesByQuery} from "@/app/actions";


export default async function Home() {

    const horror = await GetMoviesByQuery("horror");
    const sciFi = await GetMoviesByQuery("sciFi");
    const funny = await GetMoviesByQuery("funny");
    const mystery = await GetMoviesByQuery("mystery");
    console.log("=================page========================")
    console.log(horror)
    console.log("======================================================")
    return (
        <main className={"pb-20"}>
            <Nav/>
            <Banner
                data={[{
                    Title: "Better Call Saul",
                    id: "Qz3u06eXf0E",
                    subtitle: "by Vince Gilligan",
                    Imgurl: "/static/Movies_and_series_thumbnails/bettercallsaul.jpg"
                }]}
            />
            <CardContainer
                title={"horror Movie"}
                data={horror}
                size="large"
            />
            <CardContainer
                title={"sci-fi Movie"}
                data={sciFi}
                size="small"
            />
            {/*{token && <WatchAgainContainer/>}*/}
            <CardContainer
                title={"funny Movie"}
                data={funny}
                size="medium"
            />
            <CardContainer
                title={"mystery Movie"}
                data={mystery}
                size="small"
            />
        </main>
    );
}
