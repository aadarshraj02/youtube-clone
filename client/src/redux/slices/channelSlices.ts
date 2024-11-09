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
  userChannel: null as {
    id: string;
    channelName: string;
    description: string;
  } | null,
};

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setUserChannel: (state, action) => {
      state.userChannel = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createChannel.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createChannel.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userChannel = action.payload;
      })
      .addCase(createChannel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { setUserChannel } = channelSlice.actions;

export default channelSlice.reducer;
