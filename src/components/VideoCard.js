import { Link, useLocation } from "react-router-dom";
import formatViewCount from "../helper/formatViewCount";

const VideoCard = ({ info }) => {
  const { pathname } = useLocation();
  if (!info) return <div>Loading...</div>;

  let { snippet, statistics, id } = info;
  const { thumbnails, title, channelTitle } = snippet;
  let viewCount = statistics?.viewCount;

  // Set viewCount only if the pathname is "/results"
  if (pathname === "/results") {
    viewCount = null;
    id = info.id.videoId;
  }

  return (
    <Link
      to={"/watch?v=" + id}
      className="block w-full sm:w-[50%] md:w-[33%] lg:w-[25%] p-2 mb-5"
    >
      <div className="rounded-xl overflow-hidden">
        <img
          className="rounded-xl w-full h-auto"
          src={thumbnails?.medium?.url}
          alt="video thumbnail"
        />
      </div>
      <div className="mt-2">
        <h1 className="text-sm font-semibold line-clamp-2">{title}</h1>
        <p className="text-xs text-gray-600">{channelTitle}</p>
        {viewCount && (
          <p className="text-xs text-gray-600">
            {formatViewCount(viewCount)} views
          </p>
        )}
      </div>
    </Link>
  );
};

export default VideoCard;
