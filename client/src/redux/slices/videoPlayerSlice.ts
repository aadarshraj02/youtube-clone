import { createSlice } from "@reduxjs/toolkit";

interface VideoPlayerState {
  video: {
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    views: number;
    likes: number;
    dislikes: number;
    category: string;
    comments: { commentText: string; username: string; timestamp: string }[];
  } | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: VideoPlayerState = {
  video: null,
  isLoading: false,
  error: null,
};

const videoPlayerSlice = createSlice({
  name: "videoPlayer",
  initialState,
  reducers: {
    setVideoLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setVideoError: (state, action) => {
      state.error = action.payload;
    },
    setVideo: (state, action) => {
      state.video = action.payload;
    },
  },
});

export const { setVideoLoading, setVideoError, setVideo } =
  videoPlayerSlice.actions;
export default videoPlayerSlice.reducer;
