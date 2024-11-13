import { useEffect, useState } from "react";
import axios from "axios";

interface Video {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  views: number;
  likes: number;
  dislikes: number;
  category: string;
  comments: Comment[];
}

interface Comment {
  commentText: string;
  username: string;
}

export const useVideoPlayer = (videoId: string) => {
  const [video, setVideo] = useState<Video | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/videos/${videoId}`
        );
        setVideo(response.data.video);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to fetch video");
      }
    };

    if (videoId) {
      fetchVideo();
    }
  }, [videoId]);

  return { video, error };
};
