import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
