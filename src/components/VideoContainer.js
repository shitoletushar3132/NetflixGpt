import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../constants/api.constant";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../store/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videosRedux = useSelector((store) => store.video.videos);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        dispatch(addVideos(json?.items));
      } catch (err) {
        setError("Failed to fetch videos");
        console.error("Failed to fetch videos", err);
      } finally {
        setLoading(false);
      }
    };

    getVideos();
  }, [page]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div
      className="flex flex-wrap overflow-y-scroll ml-5"
      onScroll={() => setPage((prev) => prev + 1)}
    >
      {videosRedux?.map((video, index) => (
        <VideoCard key={video.id + index} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
