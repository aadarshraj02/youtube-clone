import { createSlice } from "@reduxjs/toolkit";

interface VideoState {
  uploadProgress: number;
  error: string | null;
}

const initialState: VideoState = {
  uploadProgress: 0,
  error: null,
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
  },
});

export const { setUploadProgress, setError } = videoSlice.actions;
export default videoSlice.reducer;
