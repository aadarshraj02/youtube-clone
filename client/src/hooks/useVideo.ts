import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setUploadProgress, setError } from "../redux/slices/videoSlice";

interface VideoData {
  title: string;
  description: string;
  thumbnailUrl: string;
  category: string;
  videoFile: File;
}

export const useVideo = () => {
  const dispatch = useDispatch();
  const { uploadProgress, error } = useSelector(
    (state: RootState) => state.video
  );

  const uploadVideo = async (videoData: VideoData) => {
    const formData = new FormData();
    formData.append("title", videoData.title);
    formData.append("description", videoData.description);
    formData.append("thumbnailUrl", videoData.thumbnailUrl);
    formData.append("category", videoData.category);
    formData.append("video", videoData.videoFile);

    try {
      await axios.post("http://localhost:5000/api/videos/upload", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent && progressEvent.total) {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log(`Progress: ${progress}%`);
            dispatch(setUploadProgress(progress));
          }
        },
      });
    } catch (error: any) {
      dispatch(
        setError(error.response?.data?.message || "Failed to upload video")
      );
      throw error;
    }
  };

  return { uploadVideo, uploadProgress, error };
};
