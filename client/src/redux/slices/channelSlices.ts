import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createChannel = createAsyncThunk(
  "channel/createChannel",
  async (
    channelData: {
      channelName: string;
      description: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/channels",
        channelData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create channel"
      );
    }
  }
);

const initialState = {
  status: "idle",
  error: null as string | null,
};

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createChannel.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createChannel.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createChannel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default channelSlice.reducer;
