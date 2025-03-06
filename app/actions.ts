"use server"
import {prisma} from "@/Prisma/Prisma";
import {Prisma} from "@prisma/client";



export const updateLike = async  (user_id: string, updateLike: boolean, video_id: string) => {
    return prisma.userstats.update({
        where: {
            user_id_video_id: {
                video_id,
                user_id
            }
        },
        data: {
            favourite: updateLike
        }
    })
}
export type GetMoviesByQueryType = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
export type GetMovieByID = {
    "adult": boolean,
    "backdrop_path": string,
    "belongs_to_collection": {
        "id": number,
        "name": string
        "poster_path": string
        "backdrop_path": string
    },
    "budget": number,
    "genres": [
        {
            "id": number,
            "name": string
        },
        {
            "id": number,
            "name": string
        }
    ],
    "homepage": string
    "id": 12,
    "imdb_id": string
    "original_language": string
    "original_title": string
    "overview": string
    "popularity": number
    "poster_path": string
    "production_companies": [
        {
            "id": 3,
            "logo_path": string
            "name": string
            "origin_country": string
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": string
            "name": string
        }
    ],
    "release_date": string
    "revenue": number
    "runtime": number
    "spoken_languages": [
        {
            "english_name": string
            "iso_639_1": string
            "name": string
        }
    ],
    "status": string
    "tagline": string
    "title": string
    "video": boolean,
    "vote_average": number
    "vote_count": number
}
export const GetMoviesByQuery = async (query: string): Promise<GetMoviesByQueryType[]> => {
    const baseURL = new URL("https://api.themoviedb.org/3/search/movie");
    baseURL.searchParams.set("query", query)
    baseURL.searchParams.set("include_adult", "false")
    baseURL.searchParams.set("language", "en-US")
    baseURL.searchParams.set("page", "1")
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + process.env.TMDB_SECRET
        }
    };
    try {
        return (await (await fetch(baseURL, options)).json()).results


    } catch (error) {
        console.error('error:' + error)
        if (error instanceof Error) {
            return []

        }
    }

}
