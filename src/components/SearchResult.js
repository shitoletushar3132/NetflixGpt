import React, { useEffect, useState } from "react";
import { searchYouTube } from "../constants/api.constant";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVideos } from "../store/videoSlice";
import VideoContainer from "./VideoContainer";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await searchYouTube({ searchQuery });
        dispatch(addVideos(result?.items));
        console.log("search data ", result?.items);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery, dispatch]);

  return (
    <div>
      <VideoContainer />
    </div>
  );
};

export default SearchResult;
