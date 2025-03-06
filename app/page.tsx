import CardContainer from "@/Components/CardContainer";
import Nav from "@/Components/Nav/Nav";
import Banner from "@/Components/Banner";
import {GetMoviesByQuery} from "@/app/actions";


export default async function Home() {

    const horror_snapshot = GetMoviesByQuery("horror");
    const sciFi_snapshot = GetMoviesByQuery("sciFi");
    const funny_snapshot = GetMoviesByQuery("funny");
    const mystery_snapshot = GetMoviesByQuery("mystery");

    const [
        horror,
        sciFi,
        funny,
        mystery
    ] = await Promise.all([horror_snapshot,
        sciFi_snapshot,
        funny_snapshot,
        mystery_snapshot])

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
