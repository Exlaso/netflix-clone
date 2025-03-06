import axios from "axios";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; // Replace with your API key
const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

interface YouTubeVideo {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    url: string;
}

export async function searchYouTubeVideo(query: string, maxResults: number = 1): Promise<YouTubeVideo[]> {
    try {
        const response = await axios.get(YOUTUBE_SEARCH_URL, {
            params: {
                part: "snippet",
                q: query,
                maxResults,
                key: YOUTUBE_API_KEY,
                type: "video",
            },
        });

        return response.data.items.map((item: any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.default.url,
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));
    } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        return [];
    }
}
