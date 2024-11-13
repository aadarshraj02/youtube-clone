import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  setVideo,
  setVideoLoading,
  setVideoError,
} from "../redux/slices/videoPlayerSlice";

export const useVideoPlayer = (videoId: string) => {
  const dispatch = useDispatch<AppDispatch>();

  const { video, comments, isLoading, error } = useSelector(
    (state: RootState) => state.videoPlayer
  );

  const fetchVideoDetails = async () => {
    dispatch(setVideoLoading(true));
    try {
      const response = await axios.get(
        `http://localhost:5000/api/videos/${videoId}`
      );
      const { video, comments } = response.data;
      dispatch(setVideo({ video, comments }));
    } catch (error: any) {
      dispatch(
        setVideoError(error.response?.data?.message || "Failed to fetch video")
      );
    } finally {
      dispatch(setVideoLoading(false));
    }
  };

  return { video, comments, fetchVideoDetails, isLoading, error };
};
