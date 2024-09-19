const GOOGLE_API_KEY = "AIzaSyBsGbkS0ow8RiHRiBrcU-uF95s4__152zc";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const SUGGESTIONQUERIES_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_URL =
  "https://youtube.googleapis.com/youtube/v3/search?key=" + GOOGLE_API_KEY;

export async function searchYouTube({ searchQuery }) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(
      searchQuery
    )}&key=${GOOGLE_API_KEY}`
  );
  const data = await response.json();
  return data;
}
