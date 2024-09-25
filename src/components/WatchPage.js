import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="w-screen h-screen flex flex-col gap-4">
      {/* Video and LiveChat Section */}
      <div className="flex flex-col h-full md:h-[75%] md:flex-row gap-4 px-4 w-full ">
        {/* Video Player */}
        <div className="w-full md:w-[65%] h-[300px] md:h-full">
          <iframe
            className="h-full w-full rounded-xl"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Live Chat */}
        <div className="w-full md:w-[35%] h-[300px] md:h-full p-4 bg-gray-100 rounded-xl">
          <LiveChat />
        </div>
      </div>

      {/* Comments Section */}
      <div className="w-full p-4">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
