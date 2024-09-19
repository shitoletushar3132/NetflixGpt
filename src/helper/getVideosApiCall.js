import { useDispatch } from "react-redux";
import { YOUTUBE_VIDEOS_API } from "../constants/api.constant";
import { addVideos } from "../store/videoSlice";

const useGetVideos = async (dispatch) => {
  const data = await fetch(YOUTUBE_VIDEOS_API);
  const json = await data.json();
  dispatch(addVideos(json?.items));
};

export default useGetVideos;
