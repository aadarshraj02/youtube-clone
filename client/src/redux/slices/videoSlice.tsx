import { createSlice } from "@reduxjs/toolkit";

interface VideoState {
  uploadProgress: number;
  error: string | null;
  videos: any[];
}

const initialState: VideoState = {
  uploadProgress: 0,
  error: null,
  videos: [],
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setUploadProgress: (state, action) => {
      state.uploadProgress = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { setUploadProgress, setError,setVideos } = videoSlice.actions;
export default videoSlice.reducer;
